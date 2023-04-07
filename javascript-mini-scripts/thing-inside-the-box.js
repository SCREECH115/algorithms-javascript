/*
 * Purpose of the task
 *------------
 * Implement a function that checks if the box is empty.
 *
 *
 */

// Alternatywne
// const thing = box => box.includes('* o *') ? true : false;

// Dla większych pudełek
const thing = (box) => {
  box = box.split("");

  let itemPos = box.indexOf("o");
  let foundForward = false;
  let foundBackward = false;

  for (let i = itemPos; i < box.length; i++) {
    if (box[i] === "\n") {
      break;
    } else if (box[i] === "*") {
      foundForward = true;
    }
  }

  for (let j = itemPos; j >= 0; j--) {
    if (box[j] === "\n") {
      break;
    } else if (box[j] === "*") {
      foundBackward = true;
    }
  }

  return (foundBackward && foundForward) || false;
};

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(
  thing(`*****
               *   * o
               *   *
               *****`),
  false
);

verify(
  thing(`*****
               * o *
               *   *
               *****`),
  true
);

verify(
  thing(`*****
                *   *
                *   *
                *****`),
  false
);
verify(
  thing(`******
               * o  *
               *    *
               ******`),
  true
);
verify(
  thing(`*********
               * o     *
               *       *
               *********`),
  true
);
verify(
  thing(`******
               *    * 
               *    *o
               ******`),
  false
);
verify(
  thing(` ******
               o*    * 
                *    *
                ******`),
  false
);
verify(
  thing(` ******
                *    * 
                *    *
                o*****`),
  false
);
verify(
  thing(`*********
               *    o  *
               *       *
               *********`),
  true
);
verify(
  thing(`*********
               *       *
               *      o*
               *********`),
  true
);
