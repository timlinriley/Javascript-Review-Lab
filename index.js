// // A. Q + A
// // How do we assign a value to a variable?
// let x = 'variable';

// // How do we change the value of a variable?
// x = 'updated varible';
// // How do we assign an existing variable to a new variable?
// let y = x

// console.log(y)

// // Remind me, what are declare, assign, and define?
// delcare uses keyword to establish
// assign uses = operator to associtae value
// define is recalling value
// // What is pseudocoding and why should you do it?

//   // ANSWER: outlining step by step what you intend for the code to do. it helps to organize logic and steps in       advance and also serves as a reference for each line of code and what it does.

// // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// // ANSWER: 60/40


// // B. Strings
// // For all other questions that involve writing code, you can solve them via the following instructions.

// // Create a variable called firstVariable
// let firstVariable
// // Assign it the value of the string "Hello World"
// firstVariable = 'Hello World'
// // Change the value of this variable to some number
// firstVariable = 2
// // Store the value of firstVariablein a new variable called secondVariable
// secondVariable = firstVariable
// // Change the value of secondVariableto any string.
// secondVariable = 'any string'
// // What is the value of firstVariable?
// 2
// console.log(secondVariable)
// // Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// let yourName = 'Riley'
// // ex: Hello, my name is Jean Valjean
// console.log(`Hello my name is ${yourName}`)


// // C. Booleans
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e == 'Kevin');
//   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// //  console.log(48 __ '48');

// // D. The farm
// // Declare a variable animal. Set it to be either "cow" or something else
// let animal = 'cow';
// // Write code that will print out "mooooo" if the it is equal to cow
// if (animal === 'cow'){
//   console.log('mooooo')
// }
// // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// // Commit
// if (animal === 'cow'){
//   console.log('mooooo')
// } else{
//   console.log('Hey you are not a cow.')
// }


// // E. Driver's Ed
// // Make a variable that holds a person's age; be semantic
// let personAge = 15
// // Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
// if (personAge >= 16){
//   console.log('Here are the keys!')
// } else{
//   console.log('Sorry you are too young.')
// }

// // II. Loops
// // Remember: USE letwhen you initialize your for loops!

// // This is GOOD: for(let i = 0; i < 100; i++)

// // This is NO GOOD: for(i = 0; i < 100; i++)

// // A. The basics
// // Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let i=0; i<= 10; i++){
//   console.log(i)
// }
// // Write a loop that will print out all the numbers from 10 up to and including 400
// for(let j=10; j <=400; j++){
//   console.log(j)
// }
// // Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let k=12; k<=4000; k++){
//   if(k % 3 === 0){
//     console.log(k)
//   }
// }


// // B. Get even
// // Print out the numbers that are within the range of 1 - 100
// for (let l=1; l<=100; l++){
//   console.log(l)
// }
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for (let l=1; l<=100; l++){
//   if (l % 2 === 0){
//     console.log(`${l} <-- is an even number`)
//   } else{
//     console.log(l)
//   }
// }

// for (let l=1; l<=100; l++){
//   if (l % 3 === 0 && l % 5===0){
//     console.log(`I found a ${l}. High five! Three is a crowd`) 
//   } else if (l % 5 === 0){
//     console.log(`I found a ${l}. High five!`)
//   } else if (l % 3 === 0){
//     console.log(`I found a ${l}. Three is a crowd`)
//   } else {
//     console.log(l)
//   }
// // }

// // D. Savings account
// // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bankAccount = 0;
// // for (let p =0; p<=10;p++){
// //   bankAccount += p
// // }
// // // Check your work! Your bank_account should have $55 in it.
// //  console.log(bankAccount)
// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// for (let q = 0; q<=100; q++){
//   bankAccount += (q*2)
// } console.log(bankAccount)
// // Check your work! Your bank_account should have $10,100 in it.


// // // A. Talk about it:
// // // What are the things in an array called?
// // indeces
// // // Do Arrays guarantee those things will be in order?
// // yes they are indexed
// // // What real-life thing could you model with an array?
// // let students = ['student1', 'student'2, 'student3']

// // B. Easy Does It
// // Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ['quote1', 'quote2', 'quote3']

// const randomThings = [1, 10, "Hello", true]
// // Given the following array const randomThings = [1, 10, "Hello", true]

// // How do you access the 1st element in the array?
// randomThings[0]

// // Change the value of "Hello"to "World"
// randomThings[2] = 'world';
// // Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings)

// // D. Change values
// // Given the following array
//   const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // What would you write to access the 3rd element of the array?
//   ourClass[2]
// // Change the value of "Github" to "Octocat"
// ourClass[4] = 'Octocat'
// // Add a new element, "Cloud City" to the array
// ourClass.push('Cloud City')

// console.log(ourClass)

// // E. Mix It Up
// // Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// // Given the following array: 
// const myArray = [5, 10, 500, 20]

// // Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push('Aegon')
// myArray.push('Choice')

// // Remove the 5from the beginning of the array.
// myArray.shift()
// console.log(myArray)
// // Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift('bob marley')
// console.log(myArray)
// // Remove the string of your choice from the end of the array.
// myArray.pop()
// console.log(myArray)
// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse()
// console.log(myArray)

// // F. Biggie Smalls
// // Create a variable that contains an integer.
// let bs = 20
// // Write an if ... elsestatement that:

// // console.log()s "little number" if the number is entered is less than 100
// if (bs <= 100){
//  console.log('little number')
// } else {
//   console.log('big number')
// }


// // G. Monkey in the Middle
// // Write an if ... else if ... elsestatement:

// // console.log()little numberif the number entered is less than 5.
// // If the number entered is more than 10, log big number.
// // Otherwise, log "monkey".
// if (bs <5){
//   console.log('little number')
// } else if (bs >10){
//   console.log('big number')
// } else {
//   console.log('monkey')
// }

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!"`)

// // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6,0,"Raybans")
// console.log(kristynsCloset)
// // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)
// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// // In the same way, access one item from Thom's pants array.
// // Access one item from Thom's accessories array.
// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// let outfit = [thomsCloset[0][0], thomsCloset[1][1], thomsCloset[2][1]]
// console.log(`Thoms is looking fierce in ${outfit}`)
// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[2][2] = 'Footie Pajamas'
// console.log(thomsCloset)


// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?
const printGreeting = (name) => {
  console.log(`Hello ${name}`)
}
printGreeting('Slimer')


// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) =>{
  console.log(`${name} is cool`)
}
printCool('Captain Renolds')


// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
const calculateCube = (number) => {
  return (number*number*number)
  }
console.log(calculateCube(5))

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working.

function isCharAVowel(character)  {
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u" || character === "y") {
    console.log('true')}
  
  else {
    console.log('false')}
} 
  isCharAVowel("b");


// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(){
  let strings = []
  for (let i = 0; i < arguments.length; i++)
   strings.push(arguments[i].length)
  console.log(strings)
}
getTwoLengths("string", "another")


// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(){
  let strings = []
  for (let i = 0; i < arguments.length; i++)
   strings.push(arguments[i].length)
  console.log(strings)
}
getTwoLengths("string", "another", "word", "count")


// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
  const maxOfThreeNumbers= (x,y,z) => {
  if (x >=y && x>=z){
console.log(x);
  } else if  (y >= x && y >=z ){
    console.log(y);}
 else {
  console.log(z);
}
}
maxOfThreeNumbers(1,3,2)

// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (Array) =>{
  
  let longest = Array[0]
    for (let p = 0; p < Array.length; p++){
    if (longest.length <  Array[p].length){
        longest = Array[p]
        return longest
}   
    }
 }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

const user = {
  name: 'riley',
  email: 'riley@gmail.com',
  age: '34',
  purchased: []
  
}
user.email = 'rileyT@gmail.com'
user.age++
user.location = 'NYC'
user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs') 
console.log(user.purchased[2])
console.log(user.age)

user.friend = {
  name: 'ben',
  age: 30,
  location: 'LA',
  purchased: []
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push('The one Ring')
user.friend.purchased.push('a latte')
console.log(user.friend.purchased[1])

for (i = 0; i < user.purchased.length; i++ )
  console.log(user.purchased[i])

for (i = 0; i < user.friend.purchased.length; i++ )
  console.log(user.friend.purchased[i])

// const updateUser = () => {
//   user.age++
//   user.name.toUpperCase
// }
//   updateUser()

const oldAndLoud = (person) => {
  person.age++
  user.name.toUpperCase
}
console.log(oldAndLoud(user))