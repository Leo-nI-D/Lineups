let checkboxButtonSova = document.getElementById('checkbox-sova');
let sova = document.getElementById('sova');

checkboxButtonSova.onclick = function () {
    if (sova.style.visibility === "visible") {
        sova.style.visibility = "hidden";
    } else {
        sova.style.visibility = "visible";
    }
}

let checkboxButtonBrimmy = document.getElementById('checkbox-brimmy');
let brimmy = document.getElementById('brimmy');

checkboxButtonBrimmy.onclick = function () {
    if (brimmy.style.visibility === "visible") {
        brimmy.style.visibility = "hidden";
    } else {
        brimmy.style.visibility = "visible";
    }
}