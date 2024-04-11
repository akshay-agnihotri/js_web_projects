const imageContainer = document.querySelector(".image-container");
const loaader = document.querySelector("#loader");

let photosArray = [];
let imgLoadCount = 0;
let totalImages = 0;

const key = "TqU-Jm93zh3Lm4s6ZkiP0BKjwdk3WQCU1TIJdZoMdtQ";
const count = 10;
// Unsplash API
const url = `https://api.unsplash.com/photos/random?client_id=${key}&count=${count}&orientation=landscape`;

// Create Elements for links and photos,Add to DOM
function displayPhotos() {
  // upadating total no of photos that will load
  totalImages = photosArray.length;
  // initially no photos have been loaded yet
  imgLoadCount = 0;

  // function for each object[i.e photo] in photosArray
  for (let photo = 0; photo < photosArray.length; photo++) {
    // Create <a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photosArray[photo].links.html);
    item.setAttribute("target", "_blank");

    // Create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photosArray[photo].urls.regular);
    img.setAttribute("alt", photosArray[photo].alt_description);
    img.setAttribute("title", photosArray[photo].alt_description);

    // put <img> inside the <a> , then put both inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);

    // when the img is loaded then calling imgload function to know when we have to load images again
    img.addEventListener("load", imageload);
  }
}

// // to know user reached bottom of the page...
// window.onscroll = function() {
//   // console.log(window.innerHeight);
//   // console.log(document.body.offsetHeight);
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//     getImages();
//   }
// };

function imageload() {
  imgLoadCount++;
}

window.onscroll = function(){
  if (
    (( window.innerHeight + window.scrollY )>= document.body.offsetHeight) &&
     imgLoadCount === totalImages
   ) {
     getImages();
   }
}

// Get photos from Unsplash API
async function getImages() {
  try {
    const response = await fetch(url);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(`oops this there is some problem ${error}`);
  }
}

// on Load
getImages();
