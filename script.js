// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("generatePassword");

  // ask user the password length.
  var passwordLength = prompt ("How would you like your password to be?");
  passwordLength = parseInt(passwordLength);
  if (!isNaN(passwordLength) && (passwordLength >= 8) && (passwordLength <= 128)){
    var validChar = "";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var specialChar = "!@#$%^&*()";
    var includeLC = confirm ("Do you want to include lowercase letters?");
    if (includeLC) {
      validChar += lower;
    }
    var includeUC = confirm ("Do you want to include uppercase letters?");
    if (includeUC) {
      validChar += upper;
    }
    var includeNum = confirm ("Do you want to include numbers?");
    if (includeNum) {
      validChar += number;
    }
    var includespecialChar = confirm ("Do you want to include special characters?");
    if (includespecialChar) {
      validChar += specialChar;
    }

    if (includeLC === false && includeUC === false && includeNum === false && includespecialChar === false) {
      alert("At least one character type should be selected. Please rerun the application.");
      generatePassword();
    }
    console.log("validChar = ", validChar);
    var randomPassword = "";
    var randomIndex = 0;
    var randomChar = "";
    for (var i=0; i<passwordLength; i++){
      randomIndex = Math.floor(Math.random() * validChar.length);
      console.log("randomIndex = ", randomIndex);
      randomChar = validChar[randomIndex];
      console.log("randomChar = ", randomChar);
      randomPassword += randomChar;
      console.log("randomPassword = ", randomPassword);
    }
    return randomPassword;
  } else {
    alert("Invalid value. Please enter a number between 8 and 128 (both inclusive).");
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  console.log("writePassword");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


