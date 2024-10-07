// Ahmed => 0
// Sayed => 1
// Ali => 2

let arr = ["Ahmed", "Sayed", "Ali"];

console.log(arr.length); //3

console.log(Math.random() * arr.length);

console.log(Math.floor(Math.random() * arr.length));
console.log(Math.trunc(Math.random() * arr.length)); // تحذف الارقام اللي بعد العلامة العشرية

console.log(arr[Math.floor(Math.random() * arr.length)]);
console.log(arr[Math.trunc(Math.random() * arr.length)]);
