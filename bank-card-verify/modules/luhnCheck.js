const evenOrOdd = (cardNumber) => cardNumber.length % 2 === 0;

const luhnCheck = (number) => {
  number = number.toString().split("");

  number = number.filter(function (str) {
    return /\S/.test(str);
  });

  let arr = [];
  let restNumbers = [];
  if (evenOrOdd(number)) {
    for (let i = number.length - 1; i >= 0; i--) {
      if (i % 2 === 0) {
        arr.push(number[i]);
      } else if (i % 2 === 1) {
        restNumbers.push(number[i]);
      }
    }
  } else {
    for (let i = number.length - 1; i >= 0; i--) {
      if (i % 2 === 1) {
        arr.push(number[i]);
      } else if (i % 2 === 0) {
        restNumbers.push(number[i]);
      }
    }
  }

  let newArr = arr.map((value, index, array) => {
    return value * 2;
  });

  let restSumNumbers = Array.from(restNumbers.join(""), Number);
  let sumArray = Array.from(newArr.join(""), Number);
  sumArray = sumArray.reduce((acc, val) => acc + val, 0);
  restSumNumbers = restSumNumbers.reduce((acc, val) => acc + val, 0);

  if ((sumArray + restSumNumbers) % 10 === 0) {
    return true;
  } else {
    return false;
  }
};

export default luhnCheck;
