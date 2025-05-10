const counterTitle = document.getElementById("counterTitle")
const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
    counterTitle.style.color = "red";
    countLabel.style.color = "red";
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
    counterTitle.style.color = "white";
    countLabel.style.color = "white";
}

increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
    counterTitle.style.color = "green";
    countLabel.style.color = "green";
}