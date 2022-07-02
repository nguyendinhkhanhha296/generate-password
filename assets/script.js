// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecials;
var choice;
var randomPass;

// Create various Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = lowerCase.map(function(convertUpper) {
  return convertUpper.toUpperCase();
});

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specials = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]","^", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Start generatePassword
function generatePassword() {
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  
  // Password length part
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
    alert("Your password will have "+ passwordLength + " characters");

    // Ask for confirm   
    confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
    confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");  
    confirmSpecials = confirm("Click OK to confirm if you would like to include special characters");

    } else if (!passwordLength) {
    alert('Value is required!');
  
    } else if ((passwordLength < 8) || (passwordLength > 128) || (typeof(passwordLength) !== 'number')) {
    passwordLength = prompt("You must choose between 8 and 128. Please try again!");
  };

  var choice = [];
  // Loop if answer is outside the parameters
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecials) {
    alert("You must choose at least one criteria!");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecials) {
    choice = lowerCase.concat(upperCase, numbers, specials);
    console.log(choice);

  // 3 true options
  } else if (confirmLower && confirmUpper && confirmNumber) {
  choice = lowerCase.concat(upperCase, numbers);
  console.log(choice);

  } else if (confirmLower && confirmUpper && confirmSpecials) {
  choice = lowerCase.concat(upperCase, specials);
  console.log(choice);

  } else if (confirmLower && confirmNumber && confirmSpecials) {
  choice = lowerCase.concat(numbers, specials);
  console.log(choice);

  } else if (confirmUpper && confirmNumber && confirmSpecials) {
  choice = upperCase.concat(numbers, specials);
  console.log(choice);
  
  // 2 true options
  } else if (confirmLower && confirmUpper) {
  choice = lowerCase.concat(upperCase);
  console.log(choice);

  } else if (confirmLower && confirmNumber) {
  choice = lowerCase.concat(numbers);
  console.log(choice);

  } else if (confirmLower && confirmSpecials) {
  choice = lowerCase.concat(specials);
  console.log(choice);

  } else if (confirmUpper && confirmNumber) {
  choice = upperCase.concat(numbers);
  console.log(choice);

  } else if (confirmUpper && confirmSpecials) {
  choice = upperCase.concat(specials);
  console.log(choice);

  } else if (confirmNumber && confirmSpecials) {
  choice = numbers.concat(specials);
  console.log(choice);

  // 1 true option
  } else if (confirmLower) {
  choice = lowerCase;
  console.log(choice);
  
  } else if (confirmUpper) {
  choice = blankUpper.concat(upperCase);
  console.log(choice);

  } else if (confirmNumber) {
  choice = numbers;
  console.log(choice);

  } else if (confirmSpecials) {
  choice = specials;
  console.log(choice);
  };
  
  console.log(choice);
  
  emptyPass = [];
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    randomPass = choice[Math.floor(Math.random() * choice.length)];
    emptyPass.push(randomPass);
    console.log(randomPass);
  }
  
  password = emptyPass.join('');
  console.log(password);
  
  return password; 
}
