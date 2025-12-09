import { products } from './products.js';
import { addToCart } from './shopToCart.js';

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
    const priceHtml = `<span class="text-xl font-bold">${product.price} €</span>`;
    const categoryName = categoryNames[product.category] || product.category;

    const card = document.createElement('div');
    card.innerHTML = `
      <a href="product-detail.html?id=${product.id}" class="block">
        <div class="bg-white border border-accent rounded-lg overflow-hidden h-full">
          <div class="h-56 bg-white flex items-center justify-center">
            <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain transition duration-300">
          </div>
          <div class="p-5 border-t border-accent flex flex-col h-full gap-3">
            <div class="min-h-[70px]">
              <h3 class="text-base font-medium mb-1">${product.name}</h3>
              <p class="text-xs text-gray-500">${categoryName}</p>
            </div>
            <div class="flex flex-col gap-3">
              <div>${priceHtml}</div>
              <button data-product-id="${product.id}" class="add-to-cart-btn w-full py-2.5 bg-black text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2">
                <i class="fa-solid fa-cart-plus"></i> Pievienot Grozam
              </button>
            </div>
          </div>
        </div>
      </a>
    `;

    container.appendChild(card);
  });
}

renderProductsGrid(products);


// ======= СОРТИРОВКА =======

// 1. Найти выпадающий список
const sortingSelect = document.querySelector('#sorting');

// 2. Слушать когда пользователь выбирает другой вариант
sortingSelect.addEventListener('change', function() {
  // При изменении сортировки просто применяем фильтры заново
  applyFilters();
});


// ======= ФИЛЬТРАЦИЯ =======

// Главная функция фильтрации
function applyFilters() {
  let result = []; // Сюда будем складывать подходящие товары
  
  // 1. Читаем что выбрал пользователь
  
  // Категория (находим кнопку с классом font-bold)
  let selectedCategory = 'all';
  document.querySelectorAll('.filter-category').forEach(btn => {
    if (btn.classList.contains('font-bold')) {
      selectedCategory = btn.dataset.category;
    }
  });
  
  // Цены
  let minPrice = Number(document.querySelector('#input-min').value);
  let maxPrice = Number(document.querySelector('#input-max').value);
  
  // Производители (собираем все отмеченные чекбоксы)
  let selectedBrands = [];
  document.querySelectorAll('.filter-brand').forEach(checkbox => {
    if (checkbox.checked) {
      selectedBrands.push(checkbox.value);
    }
  });
  
  // 2. Проверяем каждый товар
  products.forEach(product => {
    // Проверка категории
    let categoryOk = false;
    if (selectedCategory === 'all') {
      categoryOk = true; // Если выбрано "все" - подходит любой
    } else if (product.category === selectedCategory) {
      categoryOk = true; // Категория совпадает
    }
    
    // Проверка цены
    let priceOk = false;
    if (product.price >= minPrice && product.price <= maxPrice) {
      priceOk = true;
    }
    
    // Проверка производителя
    let brandOk = false;
    if (selectedBrands.length === 0) {
      brandOk = true; // Если ничего не выбрано - подходит любой
    } else {
      // Проверяем есть ли производитель товара в списке выбранных
      for (let i = 0; i < selectedBrands.length; i++) {
        if (product.brand === selectedBrands[i]) {
          brandOk = true;
          break; // Нашли совпадение - можно остановиться
        }
      }
    }
    
    // 3. Если все проверки пройдены - добавляем товар
    if (categoryOk && priceOk && brandOk) {
      result.push(product);
    }
  });
  
  // 4. Применяем сортировку к отфильтрованным товарам
  const sortValue = document.querySelector('#sorting').value;
  
  if (sortValue === 'low-high') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-low') {
    result.sort((a, b) => b.price - a.price);
  }
  
  // 5. Показываем отфильтрованные и отсортированные товары
  renderProductsGrid(result);
}


// Подключаем фильтры

// Клик по категории
document.querySelectorAll('.filter-category').forEach(button => {
  button.addEventListener('click', function() {
    // Убираем выделение со всех
    document.querySelectorAll('.filter-category').forEach(b => {
      b.classList.remove('font-bold');
    });
    // Выделяем нажатую
    this.classList.add('font-bold');
    // Применяем фильтры
    applyFilters();
  });
});

// Изменение цены
document.querySelector('#input-min').addEventListener('input', function() {
  applyFilters();
});

document.querySelector('#input-max').addEventListener('input', function() {
  applyFilters();
});

// Клик по чекбоксу производителя
document.querySelectorAll('.filter-brand').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    applyFilters();
  });
});

// Кнопка сброса
document.querySelector('#reset-filters').addEventListener('click', function() {
  // Сбрасываем категорию
  document.querySelectorAll('.filter-category').forEach(b => {
    b.classList.remove('font-bold');
  });
  document.querySelector('[data-category="all"]').classList.add('font-bold');
  
  // Сбрасываем цены
  document.querySelector('#input-min').value = 0;
  document.querySelector('#input-max').value = 2500;
  
  // Снимаем чекбоксы
  document.querySelectorAll('.filter-brand').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // Показываем все товары
  renderProductsGrid(products);
});

// Обработчик добавления в корзину
document.addEventListener('click', function(e) {
  if (e.target.closest('.add-to-cart-btn')) {
    e.preventDefault();
    e.stopPropagation();
    const btn = e.target.closest('.add-to-cart-btn');
    const productId = Number(btn.dataset.productId);
    addToCart(productId, 1);
    
    // Сохраняем оригинальный цвет и текст
    const originalBg = btn.style.backgroundColor;
    const originalHTML = btn.innerHTML;
    
    // Меняем на зелёный
    btn.style.backgroundColor = '#43A047';
    btn.textContent = '✓ Pievienots!';

  }
});