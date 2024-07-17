// A promise in Javascript is an object which represent the eventual completion or failure of an asynchronous operation. Promises represent a proxy 
// for a value which are getting in some point in the future.

// In JavaScript, promises are a way to handle asynchronous operations. They represent a placeholder for the eventual result of an asynchronous operation, 
// allowing you to write code that waits for the operation to complete without blocking the execution of other code. Here’s a structured interview-style
//  answer you could use:


fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Log the fetched user data
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
console.log("fetching");

// In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more effectively and avoid callback hell. They provide a cleaner, more readable, and more manageable way to handle asynchronous code.

// A promise can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// 1. fetch('https://jsonplaceholder.typicode.com/users'): This starts an HTTP request to the specified URL and returns a promise that resolves to the response of that request.
// 2. .then(response => {...}): This handles the response. If the response is not ok (status code is not in the range 200-299), it throws an error.
// 3. return response.json(): This converts the response body to JSON. It also returns a promise that resolves with the result of parsing the response body text as JSON.
// 4. .then(data => {...}): This handles the parsed JSON data. Here, we simply log the data to the console.
// 5. .catch(error => {...}): This handles any errors that occurred during the fetch operation or the previous then() blocks.
