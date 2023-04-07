/*
 * Purpose of the task
 *------------
 * Implement a function that will check if the passed password meets certain conditions:
 *
 * a) It is 3 to 10 characters long
 * b) Contains one of the special characters - !, @ or #
 * c) Includes a number
 *
 * Example:
 * validatePassword('test') // => false
 * validatePassword('test11!') // => true
 */

const validatePassword = (password) => {
  if (typeof password !== "string") throw new Error("Inpust must be a string!");

  return (
    password.length >= 3 &&
    password.length <= 10 &&
    /[!@#]/.test(password) &&
    /\d/.test(password)
  );
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(""), false);
verify(validatePassword("lol"), false);
verify(validatePassword("ToDziala1#"), true);
