import axios from "axios";

const API_KEY = "48983596-6477ed746a1aeaedff0beb1a5";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  try {
    const response = await axios.get(url);

    if (response.data.hits.length === 0) {
      return Promise.reject(new Error("No images found."));
    }

    return { images: response.data.hits, totalHits: response.data.totalHits };
  } catch (error) {
    throw new Error("Failed to fetch images.");
  }
}
