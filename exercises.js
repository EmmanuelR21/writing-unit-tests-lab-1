// Question 1
const isUpperCase = (string) => {
    for(const char of string) {
        if(char !== char.toUpperCase()) return false
    }
    return true
};

// Question 2
const removeVowels = (arrOfStrings) => {
};

// Question 3
const wordCap = () => {

};

// Question 4
const swapCase = () => {

};

// Question 5
const staggeredCase = () => {

};

// Question 6
const wordLengths = () => {

};

// Question 7
const searchWord = () => {

};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
