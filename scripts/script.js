/**
 * Calculator Logic
 *
 * Tamerlan Gudabayev
 */

/**
 * Returns what button is pressed in text format, and gives
 * values to other functions on what to do
 */
function getButtonPressed() {
  alert("shit is working");
  let buttonPressed = document.getElementsByTagName("button");
  let outputText = document.getElementById("textArea");

  for (let i = 0; i < buttonPressed.length; i++) {
    buttonPressed[i].addEventListener("click", () => {
      outputText.value = buttonPressed[i].textContent;
    });
  }
}

/**
 * Main function of the webapp, this starts everything else
 */
function launch() {
  getButtonPressed();
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

launch();
