// Get DOM elements
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");
const resultsContainer = document.getElementById("results");

const bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

// Add event listener for the search button
searchBtn.addEventListener('click', fetchResults);

function fetchResults(e) {
  e.preventDefault(); 
  resultsContainer.textContent = '';

  const searchKey = search.value.trim(); 
  if (!searchKey) return; 

  // Create a URL for the API
  let url = `${bookUrl}${encodeURIComponent(searchKey)}`;

  console.log('Fetching from:', url);

  // Fetch the books from Google Books API
  fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json))
    .catch(err => {
      console.error('Fetch error:', err);
      resultsContainer.innerHTML = '<p>Error. Please try again after some time.</p>';
    });
}

// Use a function to display results
function displayResults(json) {
  const books = json.items;

  if (!books || books.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'No results found.';
    resultsContainer.appendChild(noResults);
    return;
  }

  books.forEach(book => {
    const info = book.volumeInfo;

    // Create elements for the heading, paragraph, article, and image
    const article = document.createElement('article');
    const heading = document.createElement('h2');
    const link = document.createElement('a');
    const para = document.createElement('p');
    const img = document.createElement('img');

    // set the link for the content
    link.href = info.infoLink || '#';
    link.textContent = info.title || 'Untitled';
    link.target = '_blank'; 

    // 
    para.textContent = info.description || 'No description available anymore.';

    // Set the images
    if (info.imageLinks && info.imageLinks.thumbnail) {
      img.src = info.imageLinks.thumbnail;
      img.alt = info.title || 'Book Cover';
    }

    // article element
    heading.appendChild(link);
    article.appendChild(heading);
    article.appendChild(img);
    article.appendChild(para);

    // append the element get the results
    resultsContainer.appendChild(article);
  });
}