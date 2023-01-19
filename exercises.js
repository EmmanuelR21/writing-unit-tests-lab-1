// Question 1
const isUpperCase = (string) => {
	for (const char of string) {
		if (char !== char.toUpperCase()) return false;
	}
	return true;
};

// Question 2
const removeVowels = (arrOfStrings) => {
	const returnArray = [];
	const vowels = "aeiou";

	for (const string of arrOfStrings) {
		let stringToPush = "";
		for (let i = 0; i < string.length; i++) {
			if (!vowels.includes(string[i].toLowerCase())) stringToPush += string[i];
		}
		returnArray.push(stringToPush);
	}
	return returnArray;
};

// Question 3
const wordCap = (str) => {
	let arr = str.split(" ").map((word) => word.toLowerCase());
	arr = arr.map((word) => word.replace(word[0], word[0].toUpperCase()));
	return arr.join(" ");
};

// Question 4
const swapCase = (str) => {
	return [...str]
		.map((char) =>
			char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase(),
		)
		.join("");
};

// Question 5
const staggeredCase = (str) => {
	let lastLetterUpperCase = false;
	const newStr = [...str];

	for (let i = 0; i < str.length; i++) {
		if (/[a-z]/i.test(str[i])) {
			if (lastLetterUpperCase) {
				newStr[i] = newStr[i].toLowerCase();
				lastLetterUpperCase = false;
			} else {
				newStr[i] = newStr[i].toUpperCase();
				lastLetterUpperCase = true;
			}
		}
	}
	return newStr.join("");
};

// Question 6
const wordLengths = (str) => {
	if (!str) {
		return [];
	}
	return str.split(" ").map((word) => `${word} ${word.length}`);
};

// Question 7
const searchWord = (text, str) => {
	let count = 0;
	const wordArr = str.replace(/[,.?!]/g, " ").split(" ");

	for (let i = 0; i < wordArr.length; i++) {
		if (wordArr[i].toLowerCase() === text.toLowerCase()) {
			count += 1;
		}
	}
	return count;
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
