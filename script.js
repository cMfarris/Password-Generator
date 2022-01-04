var altChar = ["@", "%", "+", "\\", "/",  "'", "!", "#", "$", "^", "?",  ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
    
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  
  
  
  // Function to ask user for password options
  function getPswOpt() {
    var length = parseInt(
      prompt("How long would you like your password to be? (Must be between 8 and 128 characters)")
    );
    if (isNaN(length) === true) {
      alert("Password length must be given as a numerical value");
      return;
    }
    if (length < 8) {
      alert("Password length must be a minimum of 8 characters");
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this is false
    if (length > 128) {
      alert("Password length can be a maximum of 128 characters.");
      return;
    }
  
    // Variable to store boolean regarding the use of special characters
    var hasAltChar = confirm(
      "Click OK to confirm including special characters."
    );
  
    // Variable to store boolean regarding the use of numeric characters
    var hasNumChar = confirm(
      "Click OK to confirm including numeric characters."
    );
  
    // Variable to store boolean regarding the use of lowercase characters
    var hasLowerChar = confirm(
      "Click OK to confirm including lowercase characters."
    );
  
    // Variable to store boolean regarding the use of uppercase characters
    var hasUpperChar = confirm(
      "Click OK to confirm including uppercase characters."
    );
  
    // Conditional statement to check if user does not include any of the choices given. Password generator ends if all four variables come out as false
    if (
      hasAltChar === false &&
      hasNumChar === false &&
      hasLowerChar === false &&
      hasUpperChar === false
    ) {
      alert("Must select at least one character type");
      return;
    }
  
    // Object to store user input
    var pswOptions = {
      length: length,
      hasAltChar: hasAltChar,
      hasNumChar: hasNumChar,
      hasLowerChar: hasLowerChar,
      hasUpperChar: hasUpperChar,
    };
    return pswOptions;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }
  
  // Function to generate password with a user input
  function generatePassword() {
    var options = getPswOpt();
    // Variable to store password as it's being concatenated
    var result = [];
    // Array to store types of characters to include in the password
    var possibleCharacters = [];
    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];
    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasAltChar) {
      possibleCharacters = possibleCharacters.concat(altChar);
      guaranteedCharacters.push(getRandom(altChar));
    }
    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasNumChar) {
      possibleCharacters = possibleCharacters.concat(numChar);
      guaranteedCharacters.push(getRandom(numChar));
    }
    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerChar) {
      possibleCharacters = possibleCharacters.concat(lowerChar);
      guaranteedCharacters.push(getRandom(lowerChar));
    }
    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperChar) {
      possibleCharacters = possibleCharacters.concat(upperChar);
      guaranteedCharacters.push(getRandom(upperChar));
    }
    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);
      result.push(possibleCharacter);
    }
  
    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];
    }
    // Transform the result into a string and pass into writePassword
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
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  