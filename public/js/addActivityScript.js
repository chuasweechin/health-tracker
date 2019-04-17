let calculateCalories = function () {
    if (durationInputElement.value !== "") {
        let duration = Number(durationInputElement.value);
        let caloriesPerSecond = Number(activityInputElement.selectedOptions[0].getAttribute('kcal'));
        let weight = Number(document.cookie.split("; ")[4].split("=")[1]);

        console.log(caloriesPerSecond);

        let caloriesBurnt = Math.round(caloriesPerSecond * weight * duration * 100) / 100;

        let caloriesHiddenElement = document.querySelector(".addActivityLog > .selected_calories");

        caloriesHiddenElement.value = caloriesBurnt;
        caloriesLabelElement.innerHTML = caloriesBurnt;
    } else {
        caloriesLabelElement.innerHTML = 0;
    }
}

let caloriesLabelElement = document.querySelector(".addActivityLog > .container > .row > .calories > label");
let durationInputElement = document.querySelector(".addActivityLog > .container > .row > .col-8 > .duration");
let activityInputElement = document.querySelector('.addActivityLog > .container > .row > .col-8 > .activity');

durationInputElement.addEventListener('keyup', calculateCalories);
activityInputElement.addEventListener('change', calculateCalories);