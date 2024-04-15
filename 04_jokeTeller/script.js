// const jokeApiUrl = "https://official-joke-api.appspot.com/jokes/random";
const jokeApiUrl = `https://hindi-jokes-api.onrender.com/jokes?api_key=58977836054fff259c372e2e9673`;
const button = document.querySelector("button");

// varibles for our Speech Api
let speech = new SpeechSynthesisUtterance(); // Corrected capitalization
let jokeContent;

// variables for play laughter sound
let getrandomInt;
let pathFile;

// varibles for our jokeTeller Api
let response;
let joke;
let setup;
let punchline;

// Function to remove emojis from a jokeContent to speak
function removeEmojis(text) {
  return text
    .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
    .replace(/[\u{1F300}-\u{1F5FF}]/gu, "")
    .replace(/[\u{1F680}-\u{1F6FF}]/gu, "")
    .replace(/[\u{2600}-\u{26FF}]/gu, "")
    .replace(/[\u{2700}-\u{27BF}]/gu, "")
    .replace(/[\u{1F900}-\u{1F9FF}]/gu, "")
    .replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "");
}

// function for our Joke Teller Api
async function fetchRandomJoke() {
  try {
    response = await fetch(jokeApiUrl);
    joke = await response.json();
    jokeContent = joke.jokeContent;
    jokeContent = removeEmojis(jokeContent); // removing emojis if it exist in jokeContent
  } catch (error) {
    console.log(`whoops there is some problem ${error}`);
  }
}

// Function to play the jokeContent
async function playJokeContent() {
  try {
    speech.text = jokeContent;
    speech.lang = "hi-IN"; // Setting language to Hindi
    window.speechSynthesis.cancel(); // Clear any pending utterances
    await window.speechSynthesis.speak(speech);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // fetching a random joke
  await fetchRandomJoke();

  await playJokeContent();
});

// On Load
// fetchRandomJoke();
