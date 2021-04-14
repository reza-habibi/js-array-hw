// soale 1

let arr = ["a", "b", "c", "d", "e"]

function deleteIndex(arr, i) {
  arr.splice(i, 1);
  console.log(arr)
}

deleteIndex(arr, 2)


// soale 2


let a = [0, 1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]
function concatArr(e, f, g) {
  let concat = [].concat(e, f, g)
  console.log(concat.sort())
}

concatArr(a, b, c)


// soale 3

function getUnique(numbers) {
  let uniqueArray = [];

  for (let number of numbers) {
    if (uniqueArray.indexOf(number) === -1) {
      uniqueArray.push(number);
    }
  }
  console.log(uniqueArray)
}


let num = [1, 1, 4, 5, 3, 5, 3, 9];
let uniqueNames = getUnique(num);

// soale 4

let txt = "i have 2 apples and 3 pineapples and 4 bananas and 5 orange";
let numb = txt.match(/\d+/g).map(Number);
console.log(numb);

// soale 5

let flatNumbers = [[2, 3], 5, [[[2, 9], 4], 4], 1, 0]

console.log(flatNumbers.flat(Infinity).sort())
