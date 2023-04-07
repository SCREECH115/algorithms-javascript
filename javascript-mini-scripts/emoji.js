/*
 * Purpose of the task
 *------------
 * Implement the "useEmoji" function that will replace all words of a given parameter accordingly
 * with mapping from "emojiMappings" object;
 *
 * Example:
 * useEmoji('I say stop this behavior and stop hard!') // => 'I say stop this behavior 🚫 and stop hard 🚫!'
 * useEmoji('Going for a new car :D') // => 'Going for a new car 🏎 :D'
 */

const emojiMappings = {
  stop: "🚫",
  gwiazda: "⭐️",
  samochód: "🏎",
  buduję: "🧱",
  budzik: "⏰",
};

function useEmoji(input) {
  const sentence = input.split(" ");

  const result = sentence.map((word) => {
    const lowerCase = word.toLowerCase();
    if (emojiMappings[lowerCase]) {
      return emojiMappings[lowerCase];
    } else {
      return word;
    }
  });
  return result.join(" ");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  useEmoji("Takiemu zachowaniu mówię stop i to mocny estop!"),
  "Takiemu zachowaniu mówię 🚫 i to mocny estop!"
);
verify(useEmoji("Jadę po nowy samochód :D"), "Jadę po nowy 🏎 :D");
verify(useEmoji("Jadę po nowy samochódy :D"), "Jadę po nowy samochódy :D");
verify(
  useEmoji("Właśnie buduję swoje skille w JS"),
  "Właśnie 🧱 swoje skille w JS"
);
verify(
  useEmoji("Właśnie nadbuduję swoje skille w JS"),
  "Właśnie nadbuduję swoje skille w JS"
);
verify(useEmoji("Buduję samochód"), "🧱 🏎");
verify(useEmoji("BuDuję SaMocHód."), "🧱 🏎.");
