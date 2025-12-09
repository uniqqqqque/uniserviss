// Импортируем данные о товарах и функции для работы с корзиной
import { products } from './products.js';
import { getCartItems, removeFromCart, updateQuantity } from './shopToCart.js';

// Функция которая рисует корзину на странице
function renderCart() {
  // Получаем список товаров из корзины (из localStorage)
  const cartItems = getCartItems();
  
  // Находим контейнер где будем показывать товары
  const container = document.getElementById('cart-items-container');
  
  // Если корзина пустая - показываем сообщение
  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16">
        <i class="fa-solid fa-cart-shopping text-6xl text-gray-300 mb-4"></i>
        <p class="text-xl text-gray-500 mb-4">Jūsu grozs ir tukšs</p>
        <a href="shop.html" class="inline-block px-6 py-3 bg-black text-white rounded-lg hover:opacity-90">
          Uz veikalu
        </a>
      </div>
    `;
    document.getElementById('cart-total-count').textContent = '0';
    document.getElementById('cart-total-price').textContent = '0.00 €';
    return; // Останавливаем функцию
  }
  
  // Переменные для подсчета общей суммы
  let total = 0;
  let totalItems = 0;
  
  // Очищаем контейнер перед рисованием
  container.innerHTML = '';
  
  // Проходимся по каждому товару в корзине
  cartItems.forEach(cartItem => {
    // Ищем полную информацию о товаре по его ID
    const product = products.find(p => p.id === cartItem.id);
    if (!product) return; // Если товар не найден - пропускаем
    
    // Считаем сумму за этот товар (цена × количество)
    const itemTotal = product.price * cartItem.quantity;
    total += itemTotal; // Добавляем к общей сумме
    totalItems += cartItem.quantity; // Добавляем к общему количеству
    
    // Создаем HTML для одного товара в корзине
    const itemDiv = document.createElement('div');
    itemDiv.className = 'bg-white p-4 rounded-lg shadow-sm flex gap-4 items-center';
    itemDiv.innerHTML = `
      <div class="w-24 h-24 bg-white rounded border border-gray-200 flex items-center justify-center shrink-0">
        <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain">
      </div>
      <div class="flex-grow">
        <h3 class="font-semibold text-lg">${product.name}</h3>
        <p class="text-gray-600 text-sm">${product.price} €</p>
      </div>
      <div class="flex items-center gap-3">
        <button class="qty-btn px-3 py-1 border rounded hover:bg-gray-100" data-product-id="${product.id}" data-action="decrease">−</button>
        <span class="w-12 text-center font-semibold">${cartItem.quantity}</span>
        <button class="qty-btn px-3 py-1 border rounded hover:bg-gray-100" data-product-id="${product.id}" data-action="increase">+</button>
      </div>
      <div class="text-right">
        <p class="font-bold text-lg">${itemTotal.toFixed(2)} €</p>
        <button class="remove-btn text-red-600 hover:text-red-800 text-sm mt-1" data-product-id="${product.id}">
          <i class="fa-solid fa-trash"></i> Dzēst
        </button>
      </div>
    `;
    
    // Добавляем товар в контейнер
    container.appendChild(itemDiv);
  });
  
  // Обновляем итоговые цифры
  document.getElementById('cart-total-count').textContent = totalItems;
  document.getElementById('cart-total-price').textContent = `${total.toFixed(2)} €`;
}

// Слушаем клики по всей странице
document.addEventListener('click', function(e) {
  // Если кликнули по кнопке удаления
  if (e.target.closest('.remove-btn')) {
    const id = Number(e.target.closest('.remove-btn').dataset.productId);
    removeFromCart(id); // Удаляем товар
    renderCart(); // Перерисовываем корзину
  }
  
  // Если кликнули по кнопке + или −
  if (e.target.closest('.qty-btn')) {
    const btn = e.target.closest('.qty-btn');
    const id = Number(btn.dataset.productId);
    const action = btn.dataset.action; // "increase" или "decrease"
    
    const cartItems = getCartItems();
    const item = cartItems.find(i => i.id === id);
    
    if (item) {
      if (action === 'increase') {
        updateQuantity(id, item.quantity + 1); // Увеличиваем на 1
      } else if (action === 'decrease' && item.quantity > 1) {
        updateQuantity(id, item.quantity - 1); // Уменьшаем на 1 (но не меньше 1)
      }
      renderCart(); // Перерисовываем корзину
    }
  }
});

// Вызываем функцию при загрузке страницы
renderCart();
