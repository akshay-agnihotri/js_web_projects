let apiQuotes = [];
// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl); //fetch(apiUrl) is a promise(promises object hota hai :) ...) which may be fulfilled so we have used await
    apiQuotes = await response.json(); //response.json() is a promise which may be fulfilled so we have used await
    // console.log(apiQuotes[apiQuotes.length - 1]);
  } catch (error) {
    //catch Error here
  }
}
// on Load
getQuotes();
/*
// Get Quotes From API: This comment indicates the purpose of the getQuotes() function, which is to retrieve quotes from an API.

async function getQuotes() {: This line declares an asynchronous function named getQuotes(). It's marked as async because it contains asynchronous operations (like fetching data from an API).

const apiUrl = "https://type.fit/api/quotes";: This line defines the URL of the API from which the quotes will be fetched.

try {: This marks the beginning of a try block, indicating that the enclosed code may throw an error, and it should be handled.

const response = await fetch(apiUrl);: This line initiates a fetch request to the specified URL (apiUrl). The await keyword is used here because fetch() returns a promise, and await pauses the execution of the function until the promise is resolved.

apiQuotes = await response.json();: This line extracts the JSON body content from the response received from the API. Again, await is used to pause execution until the promise returned by response.json() resolves.

catch (error) {: This marks the beginning of a catch block, which will catch any errors that occur within the try block.

//catch Error here: This comment indicates that error handling should be performed at this point. Typically, you would log or handle the error in some way within this catch block.
*/
