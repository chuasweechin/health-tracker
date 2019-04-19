let caloriesHiddenElement = document.querySelector(".addActivityLog > .selected_calories");
let caloriesLabelElement = document.querySelector(".addActivityLog > .container > .row > .calories > label");
let activityInputElement = document.querySelector('.addActivityLog > .container > .row > .col-8 > .activity');

let countInputDivElement = document.querySelector('.addActivityLog > .container > .row > .count');
let distanceInputDivElement = document.querySelector('.addActivityLog > .container > .row > .distance');
let durationInputDivElement = document.querySelector('.addActivityLog > .container > .row > .duration');

let countInputElement = document.querySelector('.addActivityLog > .container > .row > .count > .count');
let durationInputElement = document.querySelector('.addActivityLog > .container > .row > .duration > .duration');
let distanceInputElement = document.querySelector('.addActivityLog > .container > .row > .distance > .distance');

let calculateCaloriesForCalisthenics = function () {
    if (countInputElement.value !== ""
            && activityInputElement.selectedOptions[0].getAttribute('type') === "calisthenics") {
        // for calisthenics, we assume that it takes 2 second to complete an activity
        let timeTakenForEachCount = 2;

        let weight = getCookie('current_weight');
        let count = Number(countInputElement.value);
        let caloriesPerSecond = Number(activityInputElement.selectedOptions[0].getAttribute('kcal'));

        let caloriesBurnt = Math.round(caloriesPerSecond * weight * count * timeTakenForEachCount * 100) / 100;

        caloriesHiddenElement.value = caloriesBurnt;
        durationInputElement.value = count * timeTakenForEachCount;

        caloriesLabelElement.innerHTML = caloriesBurnt;
    } else {
        caloriesLabelElement.innerHTML = 0;
    }
}

let calculateCaloriesForNonCalisthenics = function () {
    if (durationInputElement.value !== ""
            && distanceInputElement !== ""
                && activityInputElement.selectedOptions[0].getAttribute('type') !== "calisthenics") {
        // for calisthenics, we assume that it takes 2 second to complete an activity

        let timeTaken = Number(durationInputElement.value);
        let weight = getCookie('current_weight');
        let count = Number(countInputElement.value);
        let caloriesPerSecond = Number(activityInputElement.selectedOptions[0].getAttribute('kcal'));

        let caloriesBurnt = Math.round(caloriesPerSecond * weight * count * timeTaken * 100) / 100;

        caloriesHiddenElement.value = caloriesBurnt;
        durationInputElement.value = count * timeTaken;

        caloriesLabelElement.innerHTML = caloriesBurnt;
    } else {
        caloriesLabelElement.innerHTML = 0;
    }
}

let updateForm = function () {
    if (activityInputElement.selectedOptions[0].getAttribute('type') === "calisthenics") {
        // reset form back to empty
        countInputElement.value = "";
        distanceInputElement.value = "";
        durationInputElement.value = "";

        // display count field as this is required for calisthenics exercise
        countInputDivElement.style.display = "block";

        // display fields relating to running, walking etc.
        distanceInputDivElement.style.display = "none";
        durationInputDivElement.style.display = "none";

    } else if (activityInputElement.selectedOptions[0].getAttribute('type') === "running"
            || activityInputElement.selectedOptions[0].getAttribute('type') === "walking") {
        // reset form back to empty
        countInputElement.value = "";
        distanceInputElement.value = "";
        durationInputElement.value = "";

        // hide count field as this is not require for user to fill in
        // set count to 1 for running, walking etc. because such activity are counted as 1
        countInputDivElement.style.display = "none";
        countInputElement.value = 1;

        // display fields relating to running, walking etc.
        distanceInputDivElement.style.display = "block";
        durationInputDivElement.style.display = "block";

    } else if (activityInputElement.selectedOptions[0].getAttribute('type') === "inactivity") {
        // reset form back to empty
        countInputElement.value = "";
        distanceInputElement.value = "";
        durationInputElement.value = "";

        // hide count and distance field as this is not require for user to fill in
        // set count to 1 for inactivity because such activity are counted as 1
        countInputDivElement.style.display = "none";
        distanceInputDivElement.style.display = "none";
        countInputElement.value = 1;

        // display fields relating to running, walking etc.
        durationInputDivElement.style.display = "block";
    }
}

countInputElement.addEventListener('keyup', calculateCaloriesForCalisthenics);

distanceInputElement.addEventListener('keyup', calculateCaloriesForNonCalisthenics);
durationInputElement.addEventListener('keyup', calculateCaloriesForNonCalisthenics);

activityInputElement.addEventListener('change', calculateCaloriesForCalisthenics);
activityInputElement.addEventListener('change', updateForm);