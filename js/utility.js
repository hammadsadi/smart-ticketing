// Get Elements by id
function elementGetById(elementId) {
  let element = document.getElementById(elementId);
  return element;
}

// Element Get And Set Value By Value
function elementGetByIdAndSetValue(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

function elementGetByIdAndInnerTextReturnToNumber(elementId) {
  let elementval = document.getElementById(elementId).innerText;
  let elementNumber = parseInt(elementval);
  return elementNumber;
}
