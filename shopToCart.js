// Получить список товаров из корзины
export function getCartItems() {
  // Читаем из localStorage строку 'cart', если её нет - берём пустой массив '[]'
  // JSON.parse превращает строку обратно в массив
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

// Добавить товар в корзину
export function addToCart(productId, quantity = 1) {
  const cart = getCartItems(); // Получаем текущую корзину
  
  // Ищем, есть ли уже этот товар в корзине
  const existing = cart.find(item => item.id === productId);
  
  if (existing) {
    // Если товар уже есть - увеличиваем количество
    existing.quantity += quantity;
  } else {
    // Если товара нет - добавляем новый
    cart.push({ id: productId, quantity: quantity });
  }
  
  // Сохраняем обратно в localStorage (превращаем массив в строку)
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Удалить товар из корзины
export function removeFromCart(productId) {
  // Берём все товары кроме того, который нужно удалить
  const cart = getCartItems().filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Изменить количество товара
export function updateQuantity(productId, newQuantity) {
  const cart = getCartItems();
  const item = cart.find(item => item.id === productId);
  
  if (item && newQuantity > 0) {
    item.quantity = newQuantity; // Устанавливаем новое количество
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Очистить всю корзину
export function clearCart() {
  localStorage.removeItem('cart');
}
