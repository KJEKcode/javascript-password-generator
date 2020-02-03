// Assignment Code
var generateBtn = document.querySelector("#generate");



// Start generatePassword function
function generatePassword() {
  // PROMPT the user to select how many characters they want thier password (between 8 and 128)
  var passwordLength = prompt("Please select a length for your password between 8 and 128 characters");
  // IF the password is >= 8 and <= 128 start to the generate password IF NOT alert the user of range and ask them to try again 
  if (passwordLength  >= 8 && passwordLength <= 128) {
    // CREATE an array for all uppercase letters
    var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    // CREATE an array for all lowercase letters
    lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    // CREATE an array for all numeric values
    numericValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    // CREATE an array for all special characters
    specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "*"],
    // CONFIRM with the user that they would like to use uppercase letters
    useUppercase = confirm("would you like to use uppercase letters?"),
     // CONFIRM with the user that they would like to use lowercase letters
    useLowercase = confirm("would you like to use lowercase letters?"),
     // CONFIRM with the user that they would like to use numbers
    useNumeric = confirm("would you like to use numbers?"),
     // CONFIRM with the user that they would like to use special characters
    useSpecial = confirm("would you like to use special characters?"),
    // CREATE an empty array to possibly hold the uppercaseLetter, LowercaseLetter, numericValue and specialCharacter array
    parentArray = [];
    // IF they would like to use uppercase
    if (useUppercase) {
      // PUSH uppercase letters to parent array
      parentArray.push(uppercaseLetter);
    }
    // IF they would like to use numbers
    if (useLowercase) {
      // PUSH lowercase letters to parent array
      parentArray.push(lowercaseLetter);
    }
    // IF they would like to use numbers
    if (useNumeric) {
      // PUSH numeric values to parent array
      parentArray.push(numericValue);
    }
    // IF they would like to use special characters
    if (useSpecial) {
      // PUSH special charaters to parent array
      parentArray.push(specialCharacter);
    }
    // CREATE a variable called newPassword
    var newPassword = "";
    // FOR i < passwordLength
    for (var i = 0; i < passwordLength; i++) {
      // SELECT one of the child arrays at random from the parent array
      var arraySelectRandom = Math.floor(Math.random() * parentArray.length),
      // SELECT a value at random from the chosen child array
      valueSelectRandom = Math.floor(Math.random() * parentArray[arraySelectRandom].length);
      // ADD the randomly selected value to the new password variable
      newPassword = newPassword + parentArray[arraySelectRandom][valueSelectRandom];
    }
    // RETURN newPassword to writePassword
    return newPassword;
  } 
  // ELSE password does not meet criteria please try again
  else {
    alert("Password must be between 8 and 126 characters long. Please try again.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
