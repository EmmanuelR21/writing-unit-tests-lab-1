const exercises = require("./exercises");

//write tests in this file
test("Question 1: isUpperCase", () => {
	expect(isUpperCase("t")).toBe(false); // false
	expect(isUpperCase("T")).toBe(true); // true
	expect(isUpperCase("Four Score")).toBe(false); // false
	expect(isUpperCase("FOUR SCORE")).toBe(true); // true
	expect(isUpperCase("4SCORE!")).toBe(true); // true
	expect(isUpperCase("")).toBe(true); // true
});

test("Question 2: removeVowels", () => {
	expect(removeVowels(["abcdefghijklmnopqrstuvwxyz"])).toBe([
		"bcdfghjklmnpqrstvwxyz",
	]); // ["bcdfghjklmnpqrstvwxyz"]
	expect(removeVowels(["green", "YELLOW", "black", "white"])).toBe([
		"grn",
		"YLLW",
		"blck",
		"wht",
	]); // ["grn", "YLLW", "blck", "wht"]
	expect(removeVowels(["ABC", "AEIOU", "XYZ"])).toBe(["BC", "", "XYZ"]); // ["BC", "", "XYZ"]
});

test("Question 3: wordCap", () => {
	expect(wordCap("four score and seven")).toBe("Four Score And Seven"); // "Four Score And Seven"
	expect(wordCap("the javaScript language")).toBe("The Javascript Language"); // "The Javascript Language"
	expect(wordCap('this is a "quoted" word')).toBe('This Is A "quoted" Word'); // 'This Is A "quoted" Word'
});

test("Question 4: swapCase", () => {
	expect(swapCase("CamelCase")).toBe("cAMELcASE"); // "cAMELcASE"
	expect(swapCase("Tonight on XYZ-TV")).toBe("tONIGHT ON xyz-tv"); // "tONIGHT ON xyz-tv"
});

test("Question 5: staggeredCase", () => {
	expect(staggeredCase("I Love Launch School!")).toBe("I lOvE lAuNcH sChOoL!"); // "I lOvE lAuNcH sChOoL!"
	expect(staggeredCase("ALL CAPS")).toBe("AlL cApS"); // "AlL cApS"
	expect(staggeredCase("ignore 77 the 444 numbers")).toBe(
		"IgNoRe 77 ThE 444 nUmBeRs",
	); // "IgNoRe 77 ThE 444 nUmBeRs"
});

test("Question 6: wordLengths", () => {
	expect(wordLengths("cow sheep chicken")).toBe([
		"cow 3",
		"sheep 5",
		"chicken 7",
	]);
	// ["cow 3", "sheep 5", "chicken 7"]

	expect(wordLengths("baseball hot dogs and apple pie")).toBe([
		"baseball 8",
		"hot 3",
		"dogs 4",
		"and 3",
		"apple 5",
		"pie 3",
	]);
	// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

	expect(wordLengths("It ain't easy, is it?")).toBe([
		"It 2",
		"ain't 5",
		"easy, 5",
		"is 2",
		"it? 3",
	]);
	// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

	expect(wordLengths("Supercalifragilisticexpialidocious")).toBe([
		"Supercalifragilisticexpialidocious 34",
	]);
	// ["Supercalifragilisticexpialidocious 34"]

	expect(wordLengths("")).toBe([]); // []
	expect(wordLengths()).toBe([]); // []
});

test("Question 7: searchWord", () => {
	let text =
		"D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.";

	expect(searchWord("his", text)).toBe(4); // 4
	expect(searchWord("hip-hop", text)).toBe(1); // 1 (because "hip-hop's" !== "hip-hop")
	expect(searchWord("flow", text)).toBe(1); // 1
	expect(searchWord("is", text)).toBe(1); // 1
});

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/
