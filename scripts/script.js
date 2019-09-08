/**
 * Calculator Logic usiing PostFix Notation and PostFxix Calculator Algorithm
 * Tamerlan Gudabayev
 */

/**
 * Returns what button is pressed in text format, and gives
 * values to other functions on what to do
 */
let buttonPressed = document.querySelectorAll(".numbers");
let outputText = document.getElementById("textArea");
function getButtonPressed() {
  for (let i = 0; i < buttonPressed.length; i++) {
    buttonPressed[i].addEventListener("click", () => {
      outputText.value += buttonPressed[i].textContent;
    });
  }
}

/**
 * Main function of the webapp, this starts everything else
 */
function launch() {
  getButtonPressed();
  clearButton();
}

function addNumbers(number1, number2) {
  return number1 + number2;
}
function subtractNumbers(number1, number2) {
  return number1 - number2;
}
function multiplyNumbers(number1, number2) {
  return number1 * number2;
}
function divideNumbers(number1, number2) {
  return number1 / number2;
}

/**
 * Operator function takes an operator, and two numbers then
 * calls the appropriate function
 */
function operate(operator, number1, number2) {}

function clearButton() {
  clearButton = document.getElementById("cancelButton");
  clearButton.addEventListener("click", () => {
    outputText.value = "";
  });
}
launch();
