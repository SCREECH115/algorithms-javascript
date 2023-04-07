/*
 * Purpose of the task
 *------------
 * Implement a function to change text to greetings from Mr. Elliot, by example.
 *
 *
 * Example:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng the w0rLd'
 *
 */

const symbols = {
  a: "4",
  e: "3",
  o: "0",
  i: "1",
  s: "5",
};

function greeting(message) {
  message = message.toLowerCase().split("");
  let newArr = [];

  for (let i = 0; i < message.length; i++) {
    for (symbol in symbols) {
      if (message[i] === symbol) {
        message[i] = message[i].replace(message[i], symbols[symbol]);
      }
    }
    if (i % 2 === 0) {
      newArr.push(message[i].toUpperCase());
    } else {
      newArr.push(message[i]);
    }
  }

  return newArr.join("");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting("hacker"), "H4Ck3r");
verify(greeting("Control Is An Illusion"), "C0NtR0L 15 4N 1lLu510n");
verify(greeting("Saving The World"), "54V1Ng tH3 w0rLd");
