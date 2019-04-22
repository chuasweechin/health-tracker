let cancelCalorieInputEventHandler = function () {
    document.querySelector('.calorieIntake > .table > tbody').children[0].remove();
    document.querySelector('.calorieIntake > .title > button').disabled = false;
}

let calorieInputEventHandler = function () {
    let dateInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > input[type=date]');
    let calorieInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > input[type=number]');
    let descriptionInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > input[type=text]');

    let hiddenDateInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > form > .date');
    let hiddenCalorieInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > form > .calorie');
    let hiddenDescriptionInputElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > form > .description');

    let submitButtonElement = document.querySelector('.calorieIntake > .table > tbody > tr > td > form > .add-new-calorie');

    if (calorieInputElement.value === "" || dateInputElement.value === "") {
        submitButtonElement.disabled = true;
    } else {
        hiddenDateInputElement.value = dateInputElement.value;
        hiddenCalorieInputElement.value = calorieInputElement.value;
        hiddenDescriptionInputElement.value = descriptionInputElement.value;

        submitButtonElement.disabled = false;
    }
}

let addCalorieEntryEventHandler = function () {
    document.querySelector('.calorieIntake > .title > button').disabled = true;
    let parent = document.querySelector('.calorieIntake > .table > tbody');

    let formElement = document.createElement('form');
    formElement.action= "/calorie_intake";
    formElement.method="POST"

    let rowElement = document.createElement('tr');

    // handling for cell one
    let cellElement_One = document.createElement('td');
    let dateInputElement = document.createElement('input');
    dateInputElement.type = "date";
    dateInputElement.className = "form-control";

    dateInputElement.addEventListener('change', calorieInputEventHandler);
    cellElement_One.appendChild(dateInputElement);

    // handling for cell two
    let cellElement_Two = document.createElement('td');
    let calorieInputElement = document.createElement('input');
    calorieInputElement.type = "number";
    calorieInputElement.className = "form-control";

    calorieInputElement.addEventListener('keyup', calorieInputEventHandler);
    cellElement_Two.appendChild(calorieInputElement);

    // handling for cell three
    let cellElement_Three = document.createElement('td');
    let descriptionInputElement = document.createElement('input');
    descriptionInputElement.type = "text";
    descriptionInputElement.className = "form-control";

    descriptionInputElement.addEventListener('keyup', calorieInputEventHandler);
    cellElement_Three.appendChild(descriptionInputElement);

    // handling for cell four
    let cellElement_Four = document.createElement('td');

    let hiddenDateInputElement = document.createElement('input');
    hiddenDateInputElement.type = "hidden";
    hiddenDateInputElement.name ="date";
    hiddenDateInputElement.className = "date";

    let hiddenCalorieInputElement = document.createElement('input');
    hiddenCalorieInputElement.type = "hidden";
    hiddenCalorieInputElement.name ="calorie";
    hiddenCalorieInputElement.className = "calorie";

    let hiddenDescriptionInputElement = document.createElement('input');
    hiddenDescriptionInputElement.type = "hidden";
    hiddenDescriptionInputElement.name ="description";
    hiddenDescriptionInputElement.className = "description";

    let submitButtonElement = document.createElement('input');
    submitButtonElement.className = "btn btn-primary add-new-calorie";
    submitButtonElement.type = "submit";
    submitButtonElement.value = "Add";
    submitButtonElement.disabled = true;

    let cancelButtonElement = document.createElement('button');
    cancelButtonElement.type = "button";
    cancelButtonElement.innerHTML = "Cancel";
    cancelButtonElement.className = "btn btn-secondary add-new-calorie-cancel";
    cancelButtonElement.addEventListener('click', cancelCalorieInputEventHandler);

    formElement.appendChild(hiddenDateInputElement);
    formElement.appendChild(hiddenCalorieInputElement);
    formElement.appendChild(hiddenDescriptionInputElement);
    formElement.appendChild(submitButtonElement);
    formElement.appendChild(cancelButtonElement);
    cellElement_Four.appendChild(formElement);



    rowElement.appendChild(cellElement_One);
    rowElement.appendChild(cellElement_Two);
    rowElement.appendChild(cellElement_Three);
    rowElement.appendChild(cellElement_Four);

    parent.insertBefore(rowElement, parent.childNodes[0]);
}

window.onload = function() {
    document.querySelector('.calorieIntake > .title > button').addEventListener('click', addCalorieEntryEventHandler);
};