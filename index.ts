console.time('entries');
const array = [10, 20, 30];
for (const [index, value] of array.entries()) {
  // do something
}
console.timeEnd('entries');

console.time('forin');
for (const index in array) {
  if (array.hasOwnProperty(index)) {
    // do something
  }
}
console.timeEnd('forin');

console.time('traditional');
for (let i = 0; i < array.length; i++) {
  // do something
}
console.timeEnd('traditional');
