import { products } from './products.js';

// Словарь категорий
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

// 1. Получаем ID товара из URL
const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));

// 2. Ищем товар в массиве
const product = products.find(p => p.id === productId);

// 3. Если товар найден - показываем
if (product) {
  // Картинка
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;

  // Тексты
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-brand').textContent = product.brand;
  document.getElementById('product-price').textContent = `${product.price} €`;
  
  // Категория
  const catName = categoryNames[product.category] || product.category;
  document.getElementById('product-category').textContent = catName;
  
  // Описание
  document.getElementById('product-description').textContent = product.description;

  // Заголовок страницы
  document.title = `${product.name} | UniServiss`;
} else {
  // 4. Если не найден - показываем ошибку
  document.getElementById('product-container').classList.add('hidden');
  document.getElementById('not-found').classList.remove('hidden');
}
