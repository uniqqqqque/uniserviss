// import
import { products } from './products.js';
import { addToCart, initCartListeners } from './shopToCart.js';
import { renderProductCard } from './ui-utils.js';

initCartListeners();

const categoryNames = {
  'cpu': 'Procesori',
  'gpu': 'Videokartes',
  'mbr': 'Mātesplates',
  'ram': 'Operatīvā atmiņa',
  'hdd': 'HDD',
  'ssd': 'SSD',
  'psu': 'Barošanas bloki',
  'case': 'Korpusi',
  'fan': 'Ventilatori'
};

function renderProductsGrid(productsArray) {
  const container = document.querySelector('#product-grid');
  if (!container) return;

  container.innerHTML = '';

  productsArray.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card opacity-0 -translate-y-2 transition-all duration-300 data-[show=true]:opacity-100 data-[show=true]:translate-y-0';
    card.innerHTML = renderProductCard(product);
    container.appendChild(card);
  });

  // animate in with slight stagger
  requestAnimationFrame(() => {
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((el, i) => {
      setTimeout(() => {
        el.dataset.show = 'true';
      }, i * 30);
    });
  });
}

renderProductsGrid(products);


// sorting

// find
const sortingSelect = document.querySelector('#sorting');

// listen
sortingSelect.addEventListener('change', function() {

  applyFilters();
});


// filtring

function applyFilters() {
  let result = []; //var 4 storage
  
  
  // category
  let selectedCategory = 'all';
  document.querySelectorAll('.filter-category').forEach(btn => {
    if (btn.classList.contains('font-bold')) {
      selectedCategory = btn.dataset.category;
    }
  });
  
  // price
  let minPrice = Number(document.querySelector('#input-min').value);
  let maxPrice = Number(document.querySelector('#input-max').value);
  
  // brand
  let selectedBrands = [];
  document.querySelectorAll('.filter-brand').forEach(checkbox => {
    if (checkbox.checked) {
      selectedBrands.push(checkbox.value);
    }
  });
  
  // check every item
  products.forEach(product => {
    // check cat
    let categoryOk = false;
    if (selectedCategory === 'all') {
      categoryOk = true; // all
    } else if (product.category === selectedCategory) {
      categoryOk = true; 
    }
    
    // check price
    let priceOk = false;
    if (product.price >= minPrice && product.price <= maxPrice) {
      priceOk = true;
    }
    
    // check brand
    let brandOk = false;
    if (selectedBrands.length === 0) {
      brandOk = true; 
    } else {
      // check if exists
      for (let i = 0; i < selectedBrands.length; i++) {
        if (product.brand === selectedBrands[i]) {
          brandOk = true;
          break; 
        }
      }
    }
    
    // add if ok
    if (categoryOk && priceOk && brandOk) {
      result.push(product);
    }
  });
  
  // apply sort 
  const sortValue = sortingSelect ? sortingSelect.value : 'default';
  
  if (sortValue === 'low-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-low') {
    result.sort((a, b) => b.price - a.price);
  }
  
  // render
  renderProductsGrid(result);
}


// cat click
document.querySelectorAll('.filter-category').forEach(button => {
  button.addEventListener('click', function() {

    document.querySelectorAll('.filter-category').forEach(b => {
      b.classList.remove('font-bold');
    });
  
    this.classList.add('font-bold');
    applyFilters();
  });
});

// price
document.querySelector('#input-min').addEventListener('input', function() {
  applyFilters();
});

document.querySelector('#input-max').addEventListener('input', function() {
  applyFilters();
});

// brand
document.querySelectorAll('.filter-brand').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    applyFilters();
  });
});

// reset bttn 
document.querySelector('#reset-filters').addEventListener('click', function() {
  // reset cat
  document.querySelectorAll('.filter-category').forEach(b => {
    b.classList.remove('font-bold');
  });
  document.querySelector('[data-category="all"]').classList.add('font-bold');
  
  // reset proce
  document.querySelector('#input-min').value = 0;
  document.querySelector('#input-max').value = 2500;
  
  // reset checkbox
  document.querySelectorAll('.filter-brand').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // show all
  renderProductsGrid(products);
});

