# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
    A parameter act as place holders for future arguments that a function will be using.
    An argument is a data type that a function will use as an input in order to achive the functions desired output.
Researched answer: From OpenAI(ChatGPT4)
    Parameter: Is a value that is passed into a function when the fuction is being called.
    Argument: Is the actual value that is passed to the function when it its being called.

```js
// num1 and num2 are the parameters
const addNumbers = (num1, num2) => {
    return num1 + num2
}
// 5 and 10 are the actual values which are called arguments
let result = addNumbers(5,10)
```


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: 
    The built in method .map() iterates through an array. And, can only take arrays as arguments.

Researched answer:From OpenAI(ChatGPT4)
    The .map() method allows the creation of new by calling a function on each existing value of an array. 

    ```js
    array.map(callback[, thisArg])
    ```
    The callback is the required parameter and tells the function be called on each element of the array. 
        This funciton uses three types of arugments 
        1. currentValue: The value of the current element being processed in the array
        2. index: The index of the current element being processed
        3. array: The array that .map() method was called upon
    The thisArg is the optional parameter and specifies the value of this to be used in the callback function. 

This is an example:
```js
const myObject = {
  value: 10,
  doubleValue: function() {
    return this.value * 2;
  }
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return this.doubleValue() * number;
}, myObject);

console.log(doubledNumbers); // Output: [20, 40, 60, 80, 100]
```

    In this example, numbers arrays calls on the method .map() and passes a callback function that multiplies each of the elements in the array by myObject.doubleValue(). Passing myObject as the second argument to the .map(), it is specifying that the value of "this" within the callback function should be "myObject", since "myObject" has a method called doubleValue that can be called within the callback function.

3. What is the difference between map and filter?

Your answer:
    One of differences between .map() & .filter() is that while .map() will return an array with the same number of indexs, .filter() will not.
    Another difference is that .map() can be used to access each element and manipulated the element's values such as multiplying each element of an array and return a new arraw with the new values.

Researched answer: From OpenAI(ChatGPT4)

    1. Purpose: 
        .map() - is used to transform an array by applying a function to each element and returning a new array of the same length with the transfored elements.
        .filter() - is used to create a new array with all elements that pass a certain test, based on a provided function

    2. Return Value:
        .map() - will always returns a new array of the same length as the original array. 
        .filter() - will always return a new array that may have less elelements than the original array, and that depends on the critirea the the filter function specifies

    3. Function Signature
        .map() - takes a callback function that is executed o each element of the array, and returns an array of the same length
        .filter() - takes a callback function that is executed on each eleletn of the array, and returns an array containing only the lelemtns for which the coallback function returned "True"

4. What is iteration?

Your answer:
    Iteration is the process of repeating a set of instruction over and over again until certian(s) condition(s) are met.

Researched answer: From OpenAI(ChatGPT4)
    Iteration refers to the process of performing repeatedly a set of operations or instructions on a sequence of elements or data. Iteration is a fundimental concept in computer programming that allows programmers to execute a block of code over and over for a number of specified times or until a condition is met. 
    
    In JavaScript, it is commonly performed using loops, such as the for loop, while loop, and do-while loop. With these loops a programmer can repeatedly execute a block of code while a certain condition is true, or until completing a specified number iterations.

5. What is the difference between a function and a method?

Your answer: 
    A method is referring to a function that is defined inside of an object, while a "function" is not defined inside of an object. 

Researched answer: From OpenAI(ChatGPT4)
    A function is a set of instructions that perform a specific task or operations. A method is a function that associated with an object and is intended to be called on that object. 

    Here are some main differences:
     1. Definitions
        Functions - is defined outside of an object and can be called independently.
        Methods - is defined inside of an object and intended to be called on that object using dot notation.
     2. Naming Conventions
        Functions - typically have descriptive names that tell what the function does
        Methods - are named in a way that indicates their relationship to the object they belong to


6. STRETCH: What is hoisting in JavaScript?

Your answer: 
    I dont know, but I will most definitly look up the answer! My best educated guess is that it is referring to the programming language a platform, such as react, is based on.

Researched answer: From OpenAI(ChatGPT4)
    And I was way off target by a thousand miles!
    Hoisting in Javascript is a behavior that allows the declaration of variables and functions to moved to the top of thier respective scopes during the compilation phase.

    When JavaScript code is executed, all varaible declarations and functions declarations are processed before any code is executed. This means a variable or function can be used before it is declared in the code, and no error will be thrown. 

    But, it is important to remember that only the declarations are hoisted, not the assignments. Meaining, that if a varaible is declared and the value is assigned later in the code, the value will not be hoisted to the top of the scope. 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:   A component in react uses a special function called Reack Hook, which allows developers to make "a variable with an initial value and a method to update the value as needed" (Learn Bravo 2023 Syllabus). To create a interactive user experience, the React Components often needs to store data and perform logic. This data needs to be stored in a way where the data can be accessed throught the component and updated when required. 

Referrences: 
Learn Bravo 2023 Syllabus. Unit Three. React State . https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/react/state.md

2. Spread operator: 

The Speard syntax operator can expand an iterable to its indivial elements. This "allows a dynamic number of arguments to be passed in a function" (Learn Bravo 2023 Syllabus)

Referrences: 
Learn Bravo 2023 Syllabus . Unit Two . JavaScript Spread Operator . https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/react/props.md

3. React state:     In React everything is a component. In order for JavaScript to determine how a component renders and behaves, it uses a special type of variable.  This special variable called React State, allows React to store used to store the data to allow the component to perform.

Learn Bravo 2023 Syllabus . Unit Three .React State . https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/react/state.md


4. React props: Properties or otherwised known a props are a type of specialized React Objects that are used to pass information between components. Props allow the creation of a unidirectional flow of behavior and data between a "parent component down to a nested component via the component invocation" (Learn Bravo 2023 Syllabus). In React State values are always being updated via user interactions, however, props are not abled to be changed. They are considered a Read Only type value. 

Referrences: 
Learn Bravo 2023 Syllabus . Unit Three .React Props . https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/react/props.md


5. DOM events: React is a JavaScript based web application that was create to handle the ability interact with a user.  In React these interactions are called Document Object Model (DOM) events. Some examples of user-web appication interactions are: How a users is able to click with a mouse, place the cursor over elements, or type with a keyboard. 

Referrences: 
Learn Bravo 2023 Syllabus . Unit Three .React Inputs and Events . https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/react/props.md
