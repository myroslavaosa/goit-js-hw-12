import axios from "axios";

const API_KEY = "48983596-6477ed746a1aeaedff0beb1a5";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url).then(response => {
    if (response.data.hits.length === 0) {
      return Promise.reject("No images found.");
    }
    return response.data.hits;
  });
}
