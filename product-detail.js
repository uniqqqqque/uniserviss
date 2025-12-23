//import
import { products } from './products.js';
import { addToCart } from './shopToCart.js';
import { categoryNames } from './ui-utils.js';

const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));
const product = products.find(p => p.id === productId);

if (product) {
  // update title
  document.title = `${product.name} | UniServiss`;
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) pageTitle.textContent = `${product.name} - UniServiss`;

  // update content
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `${product.price} €`;
  document.getElementById('product-description').textContent = product.description || 'Nav apraksta';
  
  const imgEl = document.getElementById('product-image');
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }
  
  // category and brand
  const catName = categoryNames[product.category] || product.category;
  document.getElementById('product-category').textContent = catName;
  document.getElementById('product-brand').textContent = product.brand;

} else {
  const container = document.getElementById('product-container');
  if (container) {
    container.innerHTML = `
      <div class="col-span-12 text-center py-20">
        <h2 class="text-2xl font-bold mb-4">Produkts nav atrasts</h2>
        <a href="shop.html" class="text-blue-600 hover:underline">Atgriezties veikalā</a>
      </div>
    `;
  }
}

// add to cart
const addToCartBtn = document.getElementById('add-to-cart-btn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function() {
    if (product) {
      addToCart(product.id, 1);
      
      // visual
      this.style.backgroundColor = '#43A047';
      this.innerHTML = '<i class="fa-solid fa-check"></i> Pievienots!';
    }
  });
}
