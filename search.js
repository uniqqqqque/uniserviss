// Импортируем список всех товаров
import { products } from './products.js';

// Находим инпут где пользователь печатает поиск
const searchInput = document.querySelector('#search');

// Слушаем когда пользователь что-то печатает
searchInput?.addEventListener('input', function(e) {
  // Получаем текст что написал пользователь
  const query = e.target.value.toLowerCase();

  
  // Ищем товары которые совпадают с поиском
  const results = products.filter(product => {
    // Проверяем совпадает ли в названии, категории или бренде
    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  });
  
  // Показываем результаты
  showResults(results);
});

// Функция для показа результатов поиска
function showResults(results) {
  // Находим контейнер для результатов (или создаём если нет)
  let resultsDiv = document.querySelector('#search-results');
  
  if (!resultsDiv) {
    // Создаём контейнер
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'search-results';
    // Добавляем стили: позиция, фон, граница
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
    // Добавляем контейнер в родителя инпута
    searchInput.parentElement.style.position = 'relative';
    searchInput.parentElement.appendChild(resultsDiv);
  }
  
  // Если нет результатов
  if (results.length === 0) {
    resultsDiv.innerHTML = '<div style="padding: 10px; color: #999;">Товаров не найдено</div>';
    return;
  }
  
  // Рисуем каждый результат
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

// Закрываем результаты когда кликнули где-то вне поиска
document.addEventListener('click', function(e) {
  // Находим форму поиска
  const searchForm = document.querySelector('form[role="search"]');
  
  // Если кликнули вне формы
  if (!searchForm?.contains(e.target)) {
    // Очищаем результаты
    const resultsDiv = document.querySelector('#search-results');
    if (resultsDiv) {
      resultsDiv.innerHTML = '';
    }
  }
});
