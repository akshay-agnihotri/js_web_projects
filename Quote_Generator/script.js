const quoteContainer = document.querySelector("#quote-container");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const twitterBtn = document.querySelector("#twitter");
const newQuoteBtn = document.querySelector("#new-quote");

let apiQuotes = [];

function newQuote() {
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // check if the quote has author null or not
  if (!quote.author) {
    authorText.innerHTML = "Unknown";
  } else if (quote.author.includes(", type.fit")) {
    quote.author = quote.author.replace(", type.fit", "");
    authorText.innerHTML = quote.author;
  } else {
    authorText.innerHTML = quote.author;
  }
  //check quote length to determine the styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.innerHTML = quote.text;
}
// Get Quotes From API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl); //fetch(apiUrl) is a promise(promises object hota hai :) ...) which may be fulfilled so we have used await
    apiQuotes = await response.json(); //response.json() is a promise which may be fulfilled so we have used await
    newQuote();
  } catch (error) {
    //catch Error here
  }
}

// Tweet quote
function TweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${authorText.innerHTML}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", newQuote); // calling the function whenever the butoon is clicked
twitterBtn.addEventListener("click", TweetQuote); //calling the function whenever the twitterBtn is clicked

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
