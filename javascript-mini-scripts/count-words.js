/*
* Purpose of the task
*------------
* Given a sentence as input, return an object that will contain the number of occurrences of each word in the sentence. Ignore whether the word is capitalized or lowercase.
*
*
*
* Example:
* countWords("Learning JavaScript with the Master JavaScript course is fun"); // => {
   science: 1,
   javascript: 2,
   from: 1,
   odds: 1,
   master: 1,
   are: 1,
   fun: 1
}
*
*
*/

function countWords(sentence) {
  words = sentence.toLowerCase().split(" ");

  let obj = words.reduce((acc, val) => {
    val = val.replace(/[.,!]/g, "");
    if (!acc[val]) {
      acc[val] = 1;
    } else {
      acc[val]++;
    }
    return acc;
  }, {});

  return obj;
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
  JSON.stringify(
    countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")
  ),
  JSON.stringify({
    nauka: 1,
    javascript: 2,
    z: 1,
    kursem: 1,
    opanuj: 1,
    to: 1,
    frajda: 1,
  })
);
verify(
  JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")),
  JSON.stringify({
    tanie: 2,
    wino: 1,
    jest: 2,
    dobre: 2,
    bo: 1,
    i: 1,
  })
);
