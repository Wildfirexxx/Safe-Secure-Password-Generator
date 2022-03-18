// Assignment code here
var characters = [
  {
    characterType: "lowercase",
      characters:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  },
  {
    characterType: "upperCase",
    characters: [
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
  },
  {
    characterType: "numbers",
    characters: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    characterType: "symbols",
    characters: ["!", "@", "#", "$", "%", "^", "&", "*", ]
  },
];

console.log(characters[0]);
console.log(characters[1]);
console.log(characters[2]);
console.log(characters[3]);

console.log(characters[0].characters[4]);
console.log(characters[1].characters[4]);
console.log(characters[2].characters[4]);
console.log(characters[3].characters[4]);


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