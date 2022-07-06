const form = document.querySelector("#form");

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");

const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");

// a-z or A-Z or 0-9"
const allCharactersExp = /^[a-zA-Z0-9]+$/;
const allCharactersMessage = "It can be a-z or A-Z or 0-9";

// 3 characters among A, B or C
const abcExp = /^[A-Z]{3}$/;
const abcExpMessage = "It can be 3 characters among A, B or C";

//  3 characters among A, B or C, followed by  2 digits (0-9)
const abcAndDigitExp = /^[ABC]{3}\d{2}$/;
const abcAndDigitMessage =
  "It can be 3 characters among A, B or C, followed by  2 digits (0-9)";

function validateInputs() {
  const input1Valid = input1.value.match(allCharactersExp) != null;
  const output1Error = input1Valid ? null : allCharactersMessage;
  updateOutput(output1, output1Error);

  const input2Valid = input2.value.match(abcExp) != null;
  const output2Error = input2Valid ? null : abcExpMessage;
  updateOutput(output2, output2Error);

  const input3Valid = input3.value.match(abcAndDigitExp) != null;
  const output3Error = input3Valid ? null : abcAndDigitMessage;
  updateOutput(output3, output3Error);
}

/**
 * Update the text and style of given output
 * If errorMessage is null : the output  style is green, otherwise it will be red
 */
function updateOutput(output, errorMessage) {
  let isValid = errorMessage === null;

  output.style.color = isValid ? "green" : "red";
  output.textContent = isValid ? "Valid ! " : errorMessage;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInputs();
});
