import { fetchImages } from "./js/pixabay-api.js";
import { renderImages, clearGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector("#search-form");
const loader = document.querySelector(".loader");

form.addEventListener("submit", event => {
  event.preventDefault();
  
  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search query!" });
    return;
  }

  clearGallery();
  loader.style.display = "block";

  fetchImages(query)
    .then(images => {
      renderImages(images);
      iziToast.success({ title: "Success", message: "Images loaded!" });
    })
    .catch(error => {
      iziToast.error({ title: "Error", message: error });
    })
    .finally(() => {
      loader.style.display = "none";
      form.reset();
    });
});
