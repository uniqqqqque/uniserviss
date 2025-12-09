import { products } from './products.js';

const categoryNames = {
  'pc': 'Datori',
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

function renderPopularProducts(productsArray) {
  const container = document.querySelector('#popular-products');
  if (!container) return;

  container.innerHTML = '';

  const topFour = productsArray.slice(0, 4);

  topFour.forEach(product => {
    const priceHtml = `<span class="text-xl font-bold">${product.price} €</span>`;
    const categoryName = categoryNames[product.category] || product.category;

    const card = document.createElement('div');
    card.innerHTML = `
      <a href="product-detail.html?id=${product.id}" class="block">
        <div class="bg-white border border-accent rounded-lg overflow-hidden">
          <div class="h-56 bg-white">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition duration-300 hover:scale-105">
          </div>
          <div class="p-5 border-t border-accent">
            <div>
              <h3 class="text-base font-medium mb-3">${product.name}</h3>
              <p class="text-xs text-gray-500 mb-2">${categoryName}</p>
            </div>
            <div class="mt-4">
              <div class="mb-4">
                ${priceHtml}
              </div>
              <a href="shop.html" class="w-full py-2.5 bg-black text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2">
                <i class="fa-solid fa-cart-shopping"></i> Uz veikalu
              </a>
            </div>
          </div>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
}

renderPopularProducts(products);