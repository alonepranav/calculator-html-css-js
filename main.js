let inputOutputBox = document.getElementById("InputOutput");

function append(value) {
    inputOutputBox.value += value;
}

function pop() {

    inputOutputBox.value = inputOutputBox.value.slice(0,inputOutputBox.value.length-1);
}

function equalButton() {
    try {
        inputOutputBox.value = eval(inputOutputBox.value);
    } catch {
        inputOutputBox.value = "Format error ...";
        inputOutputBox.classList.toggle("toggleClass");
    }
}

function allClear() {
    inputOutputBox.value = "";
    inputOutputBox.classList.remove("toggleClass");
}