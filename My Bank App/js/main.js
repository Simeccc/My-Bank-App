// SELECTION
let mainBody = document.querySelector('.main-body');
let editBody = document.querySelector('.edit-body');

// FORM INPUTS & BUTTONS
let inputName = document.querySelector('[name=name]');
let inputSurname = document.querySelector('[name=surname]');
let inputCardType = document.querySelector('[name=card-type]');
let inputMoneyAmount = document.querySelector('[name=money-amount]');

// FORM EDIT INPUTS & BUTTONS
let einputName = document.querySelector('[name=eName]');
let einputSurname = document.querySelector('[name=eSurname]');
let einputCardType = document.querySelector('[name=eCard-type]');
let einputMoneyAmount = document.querySelector('[name=eMoney-amount]');

// BUTTONS
let accountsBtn = document.querySelector('.accounts-btn');
let addAccountBtn = document.querySelector('.add-account-btn');
let editDeleteBtn = document.querySelector('.edit-delete-btn');
let saveBtn = document.querySelector('.save-btn');
let editAccountBtn = document.querySelector('.edit-account-btn');

// VIEWS
let accountsView = document.querySelector('.accounts-view');
let addAccountView = document.querySelector('.add-account-view');
let editAccountView = document.querySelector('.edit-account-view');
let editDeleteAccountView = document.querySelector('.edit-delete-account-view');

createTable();

// CLICKS FOR BUTTONS
accountsBtn.addEventListener('click', displayAccountsView);
addAccountBtn.addEventListener('click', displayAddAccountView);
editDeleteBtn.addEventListener('click', displayEditDeleteAccountView);
saveBtn.addEventListener('click', saveNewAccount);
editAccountBtn.addEventListener('click', saveAccountChanges);

function saveNewAccount() {
    let newAccount = {
        id : db.length + 1,
        name : inputName.value,
        surname : inputSurname.value,
        cardType : inputCardType.value,
        moneyAmount : inputMoneyAmount.value
    };
    db.push(newAccount);
    resetInputs();
    createTable();
}

function saveAccountChanges() {
    db[index].name = einputName.value;
    db[index].surname = einputSurname.value;
    db[index].cardType = einputCardType.value;
    db[index].moneyAmount = einputMoneyAmount.value;

    createEditDeleteTable();
    createTable();
    
    displayEditDeleteAccountView();
}

function resetInputs() {
    inputName.value = "";
    inputSurname.value = "";
    inputCardType.value = "";
    inputMoneyAmount.value = "";
}

function createTable() {
    let text = "";

    for (let i = 0; i < db.length; i++) {
        text += `
        <tr>
            <td>${db[i].id}</td>
            <td>${db[i].name}</td>
            <td>${db[i].surname}</td>
            <td>${db[i].cardType}</td>
            <td>${db[i].moneyAmount}</td>
        </tr>
        `;
        mainBody.innerHTML = text;
    }
}

function createEditDeleteTable() {
    let text = "";

    for (let i = 0; i < db.length; i++) {
        text += `
        <tr>
            <td>${db[i].id}</td>
            <td>${db[i].name}</td>
            <td>${db[i].surname}</td>
            <td>${db[i].cardType}</td>
            <td>${db[i].moneyAmount}</td>
            <td><button class="edit-btn" data-index="${i}">Edit</button></td>
            <td><button class="delete-btn" data-index="${i}">Delete</button></td>
        </tr>
        `;
    }
    editBody.innerHTML = text;

    let editBtn = document.querySelectorAll('.edit-btn');
    let deleteBtn = document.querySelectorAll('.delete-btn');
    
    for (let i = 0; i < editBtn.length; i++) {
        editBtn[i].addEventListener('click', editAccount);
        deleteBtn[i].addEventListener('click', deleteAccount);
    }
}

let index = null;

function editAccount() {
    index = this.getAttribute("data-index");

    editAccountView.style.display = "block";
    let sectionViews = document.querySelectorAll('.view-section');
    for (let i = 0; i < sectionViews.length; i++) {
        sectionViews[i].style.display = "none";        
    }

    einputName.value = db[index].name;
    einputSurname.value = db[index].surname;
    einputCardType.value = db[index].cardType;
    einputMoneyAmount.value = db[index].moneyAmount;
}

function deleteAccount() {
    let index = this.getAttribute("data-index");
    db.splice(index, 1);
    createEditDeleteTable();
    createTable();
}

function displayAccountsView() {
    accountsView.style.display = "block";
    addAccountView.style.display = "none";
    editAccountView.style.display = "none";
    editDeleteAccountView.style.display = "none";
    createTable();
}

function displayAddAccountView() {
    accountsView.style.display = "none";
    addAccountView.style.display = "block";
    editAccountView.style.display = "none";
    editDeleteAccountView.style.display = "none";
}

function displayEditDeleteAccountView() {
    accountsView.style.display = "none";
    addAccountView.style.display = "none";
    editAccountView.style.display = "none";
    editDeleteAccountView.style.display = "block";
    createEditDeleteTable();
}













