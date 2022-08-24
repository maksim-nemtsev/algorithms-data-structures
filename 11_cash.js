const cash = (fn) => {
  const cash = {};

  return function (n) {
    if (cash[n]) {
      console.log("taken from cache:", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    console.log("taken from function:", result);
    cash[n] = result;
    return result;
  };
};

const factorial = (number) => {
  let result = 1;

  while (number !== 1) {
    result *= number;
    number -= 1;
  }
  return result;
};
console.log(
  "🚀 ~ file: 11_cash.js ~ line 13 ~ factorial ~ factorial",
  factorial(4)
);

const cashFactorial = cash(factorial);
console.log(
  "🚀 ~ file: 11_cash.js ~ line 31 ~ cashFactorial",
  cashFactorial(5)
);
console.log(
  "🚀 ~ file: 11_cash.js ~ line 31 ~ cashFactorial",
  cashFactorial(6)
);
console.log(
  "🚀 ~ file: 11_cash.js ~ line 31 ~ cashFactorial",
  cashFactorial(7)
);
console.log(
  "🚀 ~ file: 11_cash.js ~ line 31 ~ cashFactorial",
  cashFactorial(5)
);
console.log(
  "🚀 ~ file: 11_cash.js ~ line 31 ~ cashFactorial",
  cashFactorial(6)
);
