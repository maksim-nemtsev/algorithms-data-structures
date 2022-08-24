//understanding
//factorial
const fact = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * fact(num - 1);
};
console.log("🚀 ~ file: 5_recursion.js ~ line 5 ~ fact ~ fact", fact(4));
console.log("🚀 ~ file: 5_recursion.js ~ line 5 ~ fact ~ fact", fact(5));
console.log("🚀 ~ file: 5_recursion.js ~ line 5 ~ fact ~ fact", fact(6));

//fibonacci numbers
const fibonacci = (num) => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(
  "🚀 ~ file: 5_recursion.js ~ line 20 ~ fibonacci ~ fibonacci",
  fibonacci(4)
);
console.log(
  "🚀 ~ file: 5_recursion.js ~ line 20 ~ fibonacci ~ fibonacci",
  fibonacci(5)
);
console.log(
  "🚀 ~ file: 5_recursion.js ~ line 20 ~ fibonacci ~ fibonacci",
  fibonacci(6)
);
