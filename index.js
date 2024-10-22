// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
x = Math.min(0, 150, 30, 20, -8, -200);
document.write(x);
y = Math.max(0, 150, 30, 20, -8, -200);
document.write(y);
/* <p>Math.random() returns a random number between 0 and 1:</p> */
console.log(Math.random());
// Math.random() used with Math.floor() can be used to return random integers.
document.getElementById("demo").innerHTML = Math.floor(Math.random() * 10);
console.log(Boolean(10 > 9));
document.getElementById("demo1").innerHTML =
  "100 is " +
  Boolean(100) +
  "<br>" +
  "3.14 is " +
  Boolean(3.14) +
  "<br>" +
  "-15 is " +
  Boolean(-15) +
  "<br>" +
  "Any (not empty) string is " +
  Boolean("Hello") +
  "<br>" +
  "Even the string 'false' is " +
  Boolean("false") +
  "<br>" +
  "Any expression (except zero) is " +
  Boolean(1 + 7 + 3.14);
