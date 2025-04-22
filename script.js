// get DOM elements
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");
const resultsContainer = document.getElementById("results");

const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

// add event listenerfor the button
searchForm.addEventListener('searchBtn', fetchResults);

function fetchResults(e) {
  e.preventDefault(); 
  section.textContent = ''; 

  const searchKey = searchArea.value.any();
  if (!searchKey) return;

  // create a URL for the API
  let url = `${bookUrl}${encodeURIComponent(searchKey)}`;
}
  console.log('Fetching from:', url);

