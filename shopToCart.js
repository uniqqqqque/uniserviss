// import
export function getCartItems() {
  // read ls 
  // string to array
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

// add to cart
export function addToCart(productId, quantity = 1) {
  const cart = getCartItems(); 
  
  // find mb already in
  const existing = cart.find(item => item.id === productId);
  
  if (existing) {
    // if yes +1
    existing.quantity += quantity;
  } else {
    // if no -add
    cart.push({ id: productId, quantity: quantity });
  }
  
  // save to ls
  localStorage.setItem('cart', JSON.stringify(cart));
}

// delete
export function removeFromCart(productId) {

  const cart = getCartItems().filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// change +-
export function updateQuantity(productId, newQuantity) {
  const cart = getCartItems();
  const item = cart.find(item => item.id === productId);
  
  if (item && newQuantity > 0) {
    item.quantity = newQuantity; 
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// clear all
export function clearCart() {
  localStorage.removeItem('cart');
}

// bttns
export function initCartListeners() {
  document.addEventListener('click', function(e) {
    if (e.target.closest('.add-to-cart-btn')) {
      e.preventDefault();
      e.stopPropagation();
      const btn = e.target.closest('.add-to-cart-btn');
      const productId = Number(btn.dataset.productId);
      addToCart(productId, 1);
      
      // save style
      const originalBg = btn.style.backgroundColor;
      const originalHTML = btn.innerHTML;
      
      // green
      btn.style.backgroundColor = '#43A047';
      btn.textContent = '✓ Pievienots!';
      
      
    }
  });
}
