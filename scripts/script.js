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
  let buttonPressed = document.getElementsByTagName("button");

  for (let i = 0; i < buttonPressed.length; i++) {
    buttonPressed[i].addEventListener("click", () => {
      return buttonPressed[i].textContent;
    });
  }
}
