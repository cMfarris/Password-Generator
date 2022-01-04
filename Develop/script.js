// Working code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Special characters
var altChar = ["a,%,+,\\,/,!,#,$,^,?,:,),(,{,},[,],~,-,_,."];

var numChar = ["0,1,2,3,4,5,6,7,8,9"];

var lowerChar = ["abcdefghijklmmopqrstovwxyz"];

var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];



// The function to ask options 
function generatePassword() {
  var length = parseInt(
    prompt('How long would like your password to be? (Must be between 8 and 128 characters')
  );
  if (isNaN(length) === true) {
    alert('Password must be given in a numerical value');
    return;
  }
}
// The statement to check pssword length is < than 128 characters
if (length > 128) {
  alert("Password length can be the maxium of 128 characters.");
  return;
}
// The variables to store boolean of special characters
var hasALtChar = confirm(
  "Click Ok to confirm including special characters."
);
// The variable to store boolean of numeric characters
var hasNumChar = comfirm(
  "Click Ok to confirm including numeric numbers."
);
// The variables to store boolean of lowercase characters
var hasLowerChar = confirm(
  "Click Ok to confirm including lowercase characters."
);
// The variable to store boolean of uppercase characters
var hasUpperChar = confirm(
  "Click Ok to confirm including uppercase characters."
);

// Statement to check if user does not include any of the choices.
if (
  hasALtChar === false &&
  hasNumChar === flase &&
  hasLowerChar === false &&
  hasUpperChar === false
) {
  alert("Must select at least one character");
  return;
}

// Store user input
var passwordOptions = {
  length: length,
  hasALtChar: hasALtChar,
  hasNumChar: hasNumChar,
  hasLowerChar: hasLowerChar,
  hasUpperChar: hasUpperChar,
};
return passwordOptions;


// Function of random element array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function to generate password
function generatePassword() {
  var options = generatePasswordOptions();

  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (options.hasALtChar) {
    possibleCharacters = possibleCharacters.concat(altChar);
    guaranteedCharacters.push(getRandom(altChar));
  }

  if (options.hasNumChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    guaranteedCharacters.push(getRandom(numChar));
  }

  if (options.hasLowerChar) {
    possibleCharacters = possibleCharacters.concat(lowerChar);
    guaranteedCharacters.push(getRandom(lowerChar));
  }

  if (options.hasUpperChar) {
    possibleCharacters = possibleCharacters.concat(upperChar);
    guaranteedCharacters.push(getRandom(upperChar));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandom(possibleCharacters);
    result.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");
}

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword);

