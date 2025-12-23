// cat mapping
export const categoryNames = {
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

// cards

export function renderProductCard(product) {
  const priceHtml = `<span class="text-xl font-bold">${product.price} €</span>`;
  const categoryName = categoryNames[product.category] || product.category;

  return `
    <a href="product-detail.html?id=${product.id}" class="block group">
      <div class="bg-white border border-accent rounded-lg overflow-hidden h-full">
        <div class="h-56 bg-white flex items-center justify-center">
          <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105">
        </div>
        <div class="p-5 border-t border-accent flex flex-col h-full gap-3">
          <div class="min-h-[70px]">
            <h3 class="text-base font-medium mb-1 line-clamp-2">${product.name}</h3>
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
}
