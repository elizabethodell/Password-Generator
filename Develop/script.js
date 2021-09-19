// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var passwordCharacters = "";
var userLength = "";


var passwordLength = function () {
  //ask person for length of password
  userLength = window.prompt("Please enter a number between 8-128 for your password length");
  userLength = parseInt(userLength);
  console.log(userLength);

//validate answer and if not returns to prompt
if (userLength < 8 || userLength > 128) {
  window.alert("Please enter a number 8-128.");
  return passwordLength();
}
};

  //ask for which character types to use
var passwordChars = function () {
//confirm the password is the correct length
if (userLength >= 8 || userLength <= 128) {
  

  var userUpperCase = confirm("Do you want uppercase letters in your password?");
  //add to characters used if selected
  if (userUpperCase === true) {
  passwordCharacters = passwordCharacters + upperCaseCharacters;
}

  var userLowerCase = confirm("Do you want lowercase letters in your password?");
  //add to characters used if selected
  if (userLowerCase === true) {
    passwordCharacters = passwordCharacters + lowerCaseCharacters;
  }

  var userNumbers = confirm("Do you want numbers in your password?");
  //add to characters used if selected
  if (userNumbers === true) {
    passwordCharacters = passwordCharacters + numberCharacters;
  }
  var userSymbols = confirm("Do you want symbols in your password?");
 //add to characters used if selected
  if (userSymbols === true) {
    passwordCharacters = passwordCharacters + specialCharacters;
  }
  console.log(passwordCharacters);
}
//validates answer and if not returns to restart prompt
if (userUpperCase != true && userLowerCase != true && userNumbers != true && userSymbols != true){
  window.alert("Please select one character type.");
  return passwordChars();
}
};

//generates the password by using inputted length and characters indicated
var generatePassword = function() {
    var length = userLength;
    console.log(length);
    retVal = "";
    for (var i = 0, n = passwordCharacters.length; i < length; ++i) {
      retVal += passwordCharacters.charAt(Math.floor(Math.random() * n));
    }
   return retVal;
}


// Write password to the #password input
function writePassword() {
  passwordLength();
  passwordChars();
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





//oen character type must be selected
//password generated and displayed in text box

