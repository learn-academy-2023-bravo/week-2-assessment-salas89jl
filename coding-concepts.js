// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"

console.log(cohort.split("")) // --> ['B', 'r', 'a', 'v','o', ' ', '2', '0','2', '3']

// a) Your answer: Before: This will log "Bravo 2023" as an array each character as value.
// b) Verify and explain: After: I was correct, but I forgot that the spaces in the strings are also treated as a character/value

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student")) //--> undifined

// a) Your answer: Because this functin is missing a return on line 20, before the string interpalation, it will log an undifined.
// b) Verify and explain: I was correct, once I added the return to the function it produced the desired output.

const greeter = (name) => {
 return `Hello, ${name}!`
}
console.log(greeter("LEARN Student")) // --> Hello, LEARN Student!

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)

console.log(multipliedByTwo) // --> [8,10,12,14,16]

// a) Your answer: [8,10,12,14,16] 
// b) Verify and explain: I was correct becuase multiplisedByTwo takes an array and uses the .map() HOF to iterate through the array and takes a number as its parameter and then multiplies it times 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds) // --> [ 11, 13, 15 ]

// a) Your answer: This will log [12,14]. 
// b) Verify and explain: I was incorrect. I didn't take my time to read the code block in its entirety. I miss the bang operator and took it for it to find the number values that are divisble by two. Since the Bang operator is followed by the two equal signs, it is telling the filter method to look for strict inequality. 

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will log the first index from the object myCodingSkills's languages property. --> JavaScript
// b) Verify and explain: I was correct. myCodingSkills is an object and by using the dot notation we are able to call on its property, and becuase that property uses an array we can use the [] we can access the array's index. We as asked cosole.log to give us the value located in index 0 of the array inside of the language property belonging to the myCodingSkills object we received an output of Javascript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent) // --> Learn { student: 'George', cohort: 'Bravo', year: 2023 }

// a) Your answer: This will log a new object called George from the class Learn. However, I forgot the format in which will it log it. 
// b) Verify and explain: I was wrong, the new object was not called George but rather it was called learnStudent. The name giving as a parameter was used to enter the name in the student property's value. 