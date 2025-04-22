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

  console.log('Fetching from:', url);

   //  to get the books use fetch()
   fetch(url)
   .then(response => response.json())
   .then(json => displayResults(json))
   .catch(err => {
     console.error('Fetch error:', err);
     section.innerHTML = '<p>Error. Please try again after some time.</p>';
   });
}

// use function to display results
function displayResults(json) {
    const books = json.items;
  
    if (!books || books.length === 0) {
      const noResults = document.createElement('p');
      noResults.textContent = 'No Result found.';
      section.appendChild(noResults);
      return;
    }

}
