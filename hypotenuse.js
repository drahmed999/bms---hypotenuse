let adjacent = 5;
let a = adjacent * adjacent;

let side = 6;
let b = side * side;

let hypotenuseSquare = (c = a + b);
console.log("cSqaure", c);

let hypotenuse = c ** 0.5;
console.log("hypotenuse  ", hypotenuse);

// if (7.810249675906654 ** 2 >= (5 ** 2 + 6 ** 2)*0.5) {
//   console.log("true");
// } else {
//   console.log("false");


if (hypotenuse ** 2 == (adjacent ** 2 + side ** 2)) {
  console.log("true");
} else {
  console.log("false");
}
