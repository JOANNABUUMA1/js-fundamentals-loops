const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
for (let i = 0; i < 4; i++) {
  numsZeroToThree[i] = i
}
console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
for (let i = 5; i < 11; i++) {
  numsFiveToTen[i - 5] = i
}
console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
for (let i = 0; i < 4; i++) {
  evenNums[i] = i + i
}
console.log(evenNums)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let i = 0; i < 4; i++) {
  countdown[i] = 4 - 1 - i
}
console.log(countdown)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
