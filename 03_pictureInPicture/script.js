
const videoEl = document.querySelector("video");
const button = document.querySelector("#button"); // Changed here

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() { 
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoEl.srcObject = mediaStream;

    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {
    // Catch error Here
    console.log("Whoops! There is an error:", error); 
  }
}

// On Load
selectMediaStream(); 


button.addEventListener("click" , async () => {
  
  // Disable button
  button.disabled = true;

  // Start Picture in Picture
  await videoEl.requestPictureInPicture();
  
  // Reset Button
  button.disabled = false;

});