const PI = 3.1415926535;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
    radius = document.getElementById("number-entry").value;
    radius = Number(radius);

    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `Result: ${circumference}`;
}

document.getElementById("reset").onclick = function () {
    radius = document.getElementById("number-entry").value = '';
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `Result: `;
}