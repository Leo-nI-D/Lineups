let checkboxButton = document.getElementById('checkbox-sova');
let sova = document.getElementById('sova');

checkboxButton.onclick = function () {
    if (sova.style.visibility === "visible") {
        sova.style.visibility = "hidden";
    } else {
        sova.style.visibility = "visible";
    }
}