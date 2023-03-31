// // ASSESSMENT 2: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// /// Template of a jest test
//   // describe("greeter", () => {
//   //   it("returns a generic greeting", () => {
//   //     expect(greeter()).toEqual("Hello, LEARN student!")
//   //   })
//   // })

// // Template for pseudocode
// // Function Signature
// // input: number
// // output: string indicating allowed, denied, or error

// // input: 39
// // output: "Cannot ride the rollercoaster"

// // Process
// // create a function called tallEnough that takes in a number called height
// // if height is less than 40 return "Cannot ride the rollercoaster"
// // if height is greater than or equal to 40 return "Buckle up, let's ride"
// // any other input return error

// // Template of function
// // const greeter = () => {
// //   return "Hello, LEARN student!"
// // }

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.


// // describe("tripleThat", () => {
// //   it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
// //     const numbersArray1 = [6, 7, 8, 9, 10]
// //     // Expected output: [18, 21, 24, 27, 30]
// //     const numbersArray2 = [24, 27, 30, 33, 36]
// //     // Expected output: [72, 81, 90, 99, 108]
// //     expect(tripleThat(numbersArray1)).toEqual([18, 21, 24, 27, 30])
// //     expect(tripleThat(numbersArray2)).toEqual([72, 81, 90, 99, 108])
// //   })
// // })

// // Yes, I failed.
// // FAIL  ./code-challenges.test.js
// // tripleThat
// //   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// // b) Create the function that makes the test pass.

// // Pseudocode
// // input: one array of numbers called array
// // output: new array of numbers with same length as the original, values are multiplied by three

// // input: [6, 7, 8, 9, 10]
// // output: [18, 21, 24, 27, 30]

// // Process
// // create a function called tripleThat
// // access each value in the array using iteration, possible methods: .forEach(), .map()
// // iteration needs to produce an array with the same length as the original array, .map()
// // return value at each index multiplied by three

// // Function
// // const tripleThat = (array) => {
// //   return array.map((value) => {
// //     return value * 3
// //   })
// // }

// // Success
// // PASS  ./code-challenges.test.js
// // tripleThat
// //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

//     /* Pseudo Code
//         1. Describe a test function called doesThreeFit 
//         2. Function will take in an object as an argement
//         3. The expected output= Wherether the number inside the object is evenly divided by three (number % 3) or not (!)
         
//     */

// describe("doesThatFit", () => {
//  it("Takes a number inside the object and checks if its evenly divided by three (number % 3) or not (!)", () => {
    
//     const object1 = { number: 15 }
//         // Expected output: "15 is divisible by three"
//     const object2 = { number: 0 }  
//         // Expected output: "0 is divisible by three"
//     const object3 = { number: -7 }
//         // Expected output: "-7 is not divisible by three"
 
// expect(doesThatFit(object1)).toBe(true)
// expect(doesThatFit(object2)).toBe(true)
// expect(doesThatFit(object3)).toBe(false)
 
//  })

// })

/*
 FAIL  ./code-challenges.test.js
  doesThatFit
    ✕ Takes a number inside the object and checks if its evenly divided by three (number % 3) or not (!) (1 ms)

  ● doesThatFit › Takes a number inside the object and checks if its evenly divided by three (number % 3) or not (!)

    ReferenceError: doesThatFit is not defined

      104 |     const object3 = { number: -7 }
      105 |     // Expected output: "-7 is not divisible by three"
    > 106 |     expect(doesThatFit(object1)).toEqual("15 is divisible by three")
          |     ^
      107 |     expect(doesThatFit(object2)).toEqual( "0 is divisible by three")
      108 |     expect(doesThatFit(object3)).toEqual("-7 is not divisible by three")
      109 |

      at Object.expect (code-challenges.test.js:106:5)
*/

// b) Create the function that makes the test pass.
/*
Pseudo Code
Create a fuction called doesThatFit
Function needs to check if the object contains a "number" as property
If property exist within the object, then it will check if "number" property has a typeof number as a value
Then it will take that value and check if its % 3 === 0
*/

const doesThatFit = (object) => {
   return object.number % 3 === 0
     }
//     }   else { 
//         console.log( `${object1.number} is not divisible by three`)
//     }
// }
// console.log(doesThatFit(object1))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe("smallTwoBig", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    it("takes in an array of words and returns an all capitatized words", () =>{
        expect(smallToBig(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
        expect(smallToBig(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]) 
    })
})
/*
FAIL  ./code-challenges.test.js
smallTwoBig
  ✕ takes in an array of words and returns an all capitatized words

● smallTwoBig › takes in an array of words and returns an all capitatized words

  ReferenceError: smallToBig is not defined

    165 | // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
    166 |     it("takes in an array of words and returns an all capitatized words", () =>{
  > 167 |         expect(smallToBig(randomNouns1)).toBe(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]) 
        |         ^
    168 |         expect(smallToBig(randomNouns2)).toBe(["temperature", "database", "chopsticks", "mango"]) 
    169 |     })
    170 | })

    at Object.expect (code-challenges.test.js:167:9)
*/
// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function named smallToBig
// Input: an array of words
// output: an array of the same words but all capilized.
// hof = to .map 

const smallToBig = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
}

/*
$ /Users/learnacademy/Desktop/week-2-assessment-salas89jl/node_modules/.bin/jest
 PASS  ./code-challenges.test.js
  smallTwoBig
    ✓ takes in an array of words and returns an all capitatized words (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.164 s, estimated 1 s
Ran all test suites.
✨  Done in 0.65s.
*/


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("whereRU", () => {
    it("takes a string and logs the index of the first vowel", () => {
      expect(whereRU("learn")).toBe(1)
      expect(whereRU("academy")).toBe(0)
      expect(whereRU("challenges")).toBe(2)

    })
})
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


/* FAIL  ./code-challenges.test.js
  smallTwoBig
    ✓ takes in an array of words and returns an all capitatized words (1 ms)
  whereRU
    ✕ takes a string and logs the index of the first vowel

  ● whereRU › takes a string and logs the index of the first vowel

    ReferenceError: whereRU is not defined

      223 | describe("whereRU", () => {
      224 |     it("takes a string and logs the index of the first vowel", () => {
    > 225 |       expect(whereRU("learn")).toEqual("1")
          |       ^
      226 |       expect(whereRU("academy")).toEqual("0")
      227 |       expect(whereRu("challenges")).toEqual("2") */


// b) Create the function that makes the test pass.
// Create a function that takes in a string and logs the index of the first vowel.

//Pseudo Code
// 1. Create a function named whereRU that takes a string as an argument
const whereRU = (str) => {
  // 2. Create an array of vowels
    const vowels = ["a","o","u","e","i"]
    // 3. Use a for loop to iterate through each character
    for (let i = 0; i < str.length; i++) {
      // 4. Using  includes() method with the array vowels to determine if the string contains the values listed in the vowel array.
      // 5. add the toLowerCase method to the strings index changes all characters in the string to lowercase which allows the fuction to check capitilized characters in the strings.
     if (vowels.includes(str[i].toLowerCase())) {
        // 6. The return will log the index if the if condition is met.
        return i
     }
    }
// 7. If no vowels are found the function will return a -1
return -1
}
/*
 PASS  ./code-challenges.test.js
  smallTwoBig
    ✓ takes in an array of words and returns an all capitatized words (2 ms)
  whereRU
    ✓ takes a string and logs the index of the first vowel

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.164 s, estimated 1 s
Ran all test suites.
✨  Done in 0.74s.
➜  week-2-assessment-salas89jl git:(week-2-assessment-jose-salas) ✗  */