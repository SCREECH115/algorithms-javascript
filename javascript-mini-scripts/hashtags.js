/*
 * Purpose of the task
 *------------
 * Implement a hashtag search function in a sentence
 *
 *
 * Example:
 * findTags('In 2020 #masterJS'); // => will masterJS
 * findTags('I will add #masterJS in a moment!'); // => will masterJS
 * findTags('I like to tag #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
 *
 */

function findTags(message) {
  message = message.split(" ").filter((el) => el.startsWith("#"));
  return message
    .join("")
    .replace(/[^\w\s]/g, " ")
    .split(" ")
    .join(", ")
    .replace(/[,]/g, "")
    .trim()
    .replace(/[ ]/g, ", ");
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

verify(findTags("W 2020 #opanujeJS"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS!"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS@"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS$"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS%"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS^"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS😄"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS✈️"), "opanujeJS");
verify(findTags("Za chwilę dodam #opanujeJS✈"), "opanujeJS");
verify(
  findTags("Lubię tagować #yolo #love#happy #h3cker"),
  "yolo, love, happy, h3cker"
);
