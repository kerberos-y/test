import { reactive } from 'vue';

export function useCartStore() {
  const state = reactive({
    items: [], // Массив товаров в корзине
    totalCount: 0, // Общее количество товаров в корзине
    totalPrice: 0, // Общая стоимость товаров в корзине
  });

  // Функция для добавления товара в корзину
  function addToCart(product) {
    const existingProduct = state.items.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1; // Увеличиваем количество товара, если он уже в корзине
    } else {
      state.items.push({ ...product, quantity: 1 }); // Добавляем новый товар
    }

    updateCart(); // Обновляем подсчёт
  }

  // Функция для обновления данных корзины
  function updateCart() {
    state.totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
    state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Функция для удаления товара из корзины
  function removeFromCart(productId) {
    state.items = state.items.filter(item => item.id !== productId);
    updateCart(); // Обновляем корзину после удаления
  }

  // Функция для очистки корзины
  function clearCart() {
    state.items = [];
    updateCart(); // Обновляем корзину после очистки
  }

  // Функция для "оплаты" корзины
  function checkout() {
    // Просто имитация обработки платежа
    console.log('Оплата прошла успешно! Корзина очищена.');
    clearCart(); // Очищаем корзину после "оплаты"
  }

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    checkout,
  };
}
