/*
 * Purpose of the task
 *------------
 * Given a word and an array of its possible anagrams as parameters, return an array with the correct anagrams.
 *
 * An anagram is a word formed by rearranging the letters of another word, using all the letters of the starting material.
 *
 * Example:
 * getAnagrams("reprogrammed", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "hello"]); => ["orperzpinawomarg", "promo game"]
 *
 *
 */

function getAnagrams(word, possibleAnagrams) {
  word = word.split("").sort();
  let arr = [];

  for (let i = 0; i < possibleAnagrams.length; i++) {
    let anagram = possibleAnagrams[i].split("").sort();

    if (
      word.length === anagram.length &&
      word.every((value, index) => value === anagram[index])
    ) {
      arr.push(possibleAnagrams[i]);
    }
  }

  return arr;
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(", ") : input;
  if (input == goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  getAnagrams("przeprogramowani", [
    "orperzpinawomarg",
    "swag",
    "graprzewanipromo",
    "orperzpwaniprom",
    "siema",
  ]),
  "orperzpinawomarg, graprzewanipromo"
);
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");
