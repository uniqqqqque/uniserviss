// import
import { products } from './products.js';

// find input bar
const searchInput = document.querySelector('#search');

// typing listen
searchInput?.addEventListener('input', function(e) {
  // get text
  const query = e.target.value.toLowerCase();

  
  // find item
  const results = products.filter(product => {
    // check 4 name
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  });
  
  // show res
  showResults(results);
});

// show res
function showResults(results) {
  // new container
  let resultsDiv = document.querySelector('#search-results');
  
  if (!resultsDiv) {
    // creation
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'search-results';
    // html
    resultsDiv.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 5px;
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
    `;
    // add to input bar
    searchInput.parentElement.style.position = 'relative';
    searchInput.parentElement.appendChild(resultsDiv);
  }
  
  // if no res
  if (results.length === 0) {
    resultsDiv.innerHTML = '<div style="padding: 10px; color: #999;">Товаров не найдено</div>';
    return;
  }
  
  // render all
  resultsDiv.innerHTML = results.map(product => `
    <a href="product-detail.html?id=${product.id}" style="
      display: block;
      padding: 12px;
      border-bottom: 1px solid #eee;
      color: black;
    ">
      <div style="font-weight: bold; font-size: 14px;">${product.name}</div>
      <div style="font-size: 12px; color: #666;">${product.brand.toUpperCase()} • ${product.price} €</div>
    </a>
  `).join('');
}

// close if click
document.addEventListener('click', function(e) {
  // finf
  const searchForm = document.querySelector('form[role="search"]');
  
  // if click
  if (!searchForm?.contains(e.target)) {
    // clear
    const resultsDiv = document.querySelector('#search-results');
    if (resultsDiv) {
      resultsDiv.innerHTML = '';
    }
  }
});
