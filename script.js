let display = document.getElementById("output");

function displayInput(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value = display.value + input;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value !== "0") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calculateResult() {
  let result = eval(display.value);
  display.value = result;
}

window.onload = function () {
  document.getElementById("output").value = "0";
};
