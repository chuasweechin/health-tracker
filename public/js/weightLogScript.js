let cancelWeightInputEventHandler = function () {
    document.querySelector('.weightLog > .table > tbody').children[0].remove();
    document.querySelector('.weightLog > .title > button').disabled = false;
}

let weightInputEventHandler = function () {
    let hiddenInputElement = document.querySelector('.weightLog > .table > tbody > tr > td > form > .weight');
    let submitButtonElement = document.querySelector('.weightLog > .table > tbody > tr > td > form > .add-new-weight');

    if (this.value.length >= 2) {
        hiddenInputElement.value = this.value;
        submitButtonElement.disabled = false;
    } else {
        submitButtonElement.disabled = true;
    }
}

let addNewWeightEntryEventHandler = function () {
    document.querySelector('.weightLog > .title > button').disabled = true;
    let parent = document.querySelector('.weightLog > .table > tbody');

    let formElement = document.createElement('form');
    formElement.action= "/weight_log";
    formElement.method="POST"

    let rowElement = document.createElement('tr');

    // handling for cell one
    let cellElement_One = document.createElement('td');
    cellElement_One.innerHTML = moment().format('DD MMM YYYY, h:mm:ss a');


    // handling for cell two
    let cellElement_Two = document.createElement('td');
    let inputElement = document.createElement('input');
    inputElement.type = "number";
    inputElement.className = "form-control";

    inputElement.addEventListener('keyup', weightInputEventHandler);
    cellElement_Two.appendChild(inputElement);


    // handling for cell three
    let cellElement_Three = document.createElement('td');
    let hiddenInputElement = document.createElement('input');
    hiddenInputElement.type = "hidden";
    hiddenInputElement.name="weight";
    hiddenInputElement.className = "weight";

    let submitButtonElement = document.createElement('input');
    submitButtonElement.className = "btn btn-success add-new-weight";
    submitButtonElement.type = "submit";
    submitButtonElement.value = "Add New Weight";
    submitButtonElement.disabled = true;

    let cancelButtonElement = document.createElement('button');
    cancelButtonElement.type = "button";
    cancelButtonElement.innerHTML = "Cancel";
    cancelButtonElement.className = "btn btn-secondary add-new-weight-cancel";
    cancelButtonElement.addEventListener('click', cancelWeightInputEventHandler);


    formElement.appendChild(hiddenInputElement);
    formElement.appendChild(submitButtonElement);
    formElement.appendChild(cancelButtonElement);
    cellElement_Three.appendChild(formElement);

    rowElement.appendChild(cellElement_One);
    rowElement.appendChild(cellElement_Two);
    rowElement.appendChild(cellElement_Three);

    parent.insertBefore(rowElement, parent.childNodes[0]);
}

document.querySelector('.weightLog > .title > button').addEventListener('click', addNewWeightEntryEventHandler);