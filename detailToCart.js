// Импортируем список товаров и функцию добавления в корзину
import { products } from './products.js';
import { addToCart } from './shopToCart.js';

// Читаем ID товара из адресной строки (например: product-detail.html?id=5)
const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id')); // Превращаем строку в число

// Ищем товар с таким ID в массиве всех товаров
const product = products.find(p => p.id === productId);

// Если товар найден - заполняем страницу его данными
if (product) {
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `${product.price} €`;
  document.getElementById('product-description').textContent = product.description || 'Nav apraksta';
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-brand').textContent = product.brand;
  document.getElementById('page-title').textContent = `${product.name} — UniServiss`;
} else {
  // Если товар не найден - показываем ошибку
  document.getElementById('product-container').innerHTML = '<p class="text-center text-xl">Produkts nav atrasts</p>';
}

// Вешаем обработчик на кнопку "Добавить в корзину"
document.getElementById('add-to-cart-btn')?.addEventListener('click', function() {
  if (product) {
    addToCart(product.id, 1); // Добавляем 1 штуку товара
    
    // Меняем цвет кнопки на зелёный
    this.style.backgroundColor = '#43A047'; // зелёный цвет
    this.textContent = '✓ Pievienots!'; // Меняем текст
  }
});
