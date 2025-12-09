import { products } from './products.js';
import { renderProductCard } from './ui-utils.js';
import { initCartListeners } from './shopToCart.js';

// Инициализируем слушатели корзины
initCartListeners();

function renderPopularProducts(productsArray) {
  const container = document.querySelector('#popular-products');
  if (!container) return;

  container.innerHTML = '';

  const topFour = productsArray.slice(0, 4);

  topFour.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = renderProductCard(product);
    container.appendChild(card);
  });
}

renderPopularProducts(products);