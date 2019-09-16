/**
 * Calculator Logic usiing PostFix Notation and PostFxix Calculator Algorithm
 * Tamerlan Gudabayev
 */

/**
 * Returns what button is pressed in text format, and gives
 * values to other functions on what to do
 */

let isOperatorPressed = false;
let buttonPressed = document.querySelectorAll(".numbers");
let outputText = document.getElementById("textArea");
function getButtonPressed() {
  for (let i = 0; i < buttonPressed.length; i++) {
    buttonPressed[i].addEventListener("click", () => {
      let currentButton = buttonPressed[i].textContent;
      if (isNaN(currentButton)) {
        // Returns true if it isn't a number
        if (isOperatorPressed) {
          // Operator is already pressed then don't do anything
        } else {
          // Add isn't pressed so press it then toggle it;
          outputText.value += buttonPressed[i].textContent;
          isOperatorPressed = true;
        }
      } else {
        outputText.value += buttonPressed[i].textContent;

        //Reset all the operators
        isOperatorPressed = false;
      }
    });
  }
}

/**
 * Main function of the webapp, this starts everything else
 */
function launch() {
  getButtonPressed();
  operate();
  clearButton();
}

/**
 * First part of calculating numbers is to chane the numbers into
 * Post Fix Notation
 * ex. 3 + 5 ==> 3 5 +
 */
function createPostFixNotation(expression) {
  let infixNotation = expression.split('');
  let numberStack = [];
  let operatorStack = [];

  for (let i = 0; i < infixNotation.length; i++) {
    if (isNaN(infixNotation[i])) {
      // if it is not a numbrt
      operatorStack.push(infixNotation[i]);
    }
    else {
      numberStack.push(infixNotation[i]);
    }
  }

  let postFixNotation = numberStack.concat(operatorStack).join("");
  console.log(postFixNotation);


}

/**
 * Second part of the equation is to use the post fix notation to calculate
 * the output value
 */
function postFixCalculator(postFixExpression) { }

function clearButton() {
  let clearButton = document.getElementById("cancelButton");
  clearButton.addEventListener("click", () => {
    outputText.value = "";
  });
}
function operate() {
  let equalButton = document.getElementById("equalButton");
  let mathExperssion = document.querySelector("#textArea");

  equalButton.addEventListener("click", () => {
    createPostFixNotation(mathExperssion.value);
  });
}
launch();
