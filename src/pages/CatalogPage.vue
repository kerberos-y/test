<template>
    <q-page class="store-page">
      <div class="catalog-container">
        <!-- Описание -->
        <div class="catalog-header">
          <h1 class="page-title">Продажа Супер-Каров</h1>
          <p class="page-description">
            В нашем магазине представлены только самые лучшие супер-кары. Купите авто своей мечты прямо сейчас! 
            Огромный выбор, отличные цены и доставка по всей стране. Выбирайте свой идеальный автомобиль!
          </p>
          <div class="catalog-filters">
            <q-btn label="Фильтры" icon="filter_list" color="primary" class="filter-btn" />
            <q-btn label="Сортировать по цене" icon="sort" color="secondary" class="sort-btn" />
          </div>
        </div>
  
        <!-- Сетка товаров -->
        <div class="products-grid">
          <q-card
            v-for="product in products"
            :key="product.id"
            class="product-card"
            :style="getCardBackground(product.image)"
          >
            <!-- Оверлей, чтобы текст читался поверх картинки -->
            <div class="overlay">
              <q-card-section class="product-details">
                <div class="product-title">{{ product.title }}</div>
                <div class="product-price">{{ product.price }} грн</div>
                <div class="product-description">{{ product.description }}</div>
              </q-card-section>
            </div>
  
            <q-card-actions class="product-actions">
              <q-btn
                label="Добавить в корзину"
                color="primary"
                @click="addToCart(product)"
                class="add-to-cart-btn"
              />
            </q-card-actions>
          </q-card>
        </div>
  
        <!-- Кнопка открытия корзины -->
        <div class="cart-button-container">
          <q-btn label="Открыть корзину" color="accent" @click="showCart = true" class="cart-btn" />
          <span v-if="totalCount > 0" class="cart-count">{{ totalCount }}</span>
        </div>
  
        <!-- Модальное окно для корзины -->
        <q-dialog v-model="showCart" persistent>
          <q-card class="cart-dialog">
            <q-card-section>
              <div class="text-h6">Корзина</div>
            </q-card-section>
  
            <q-card-section>
              <div v-if="cartItems.length === 0">
                Ваша корзина пуста.
              </div>
              <div v-else>
                <div v-for="item in cartItems" :key="item.id" class="cart-item">
                  <div class="cart-item-details">
                    <q-img :src="getProductImage(item.image)" ratio="1/1" class="cart-item-image" />
                    <div>
                      <div>{{ item.title }}</div>
                      <div class="cart-item-quantity">x{{ item.quantity }}</div>
                    </div>
                    <div>{{ item.price }} грн</div>
                  </div>
                  <q-btn icon="delete" flat color="negative" @click="removeFromCart(item.id)" />
                </div>
              </div>
            </q-card-section>
  
            <q-card-section class="cart-total">
              <div>Итого: {{ totalPrice }} грн</div>
            </q-card-section>
  
            <q-card-actions align="right">
              <q-btn label="Очистить корзину" color="negative" v-if="cartItems.length > 0" @click="clearCart" />
              <q-btn label="Оплатить" color="secondary" @click="checkout" />
              <q-btn label="Закрыть" color="primary" @click="showCart = false" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useCartStore } from 'src/store/cartStore.js';
  
  const showCart = ref(false);
  const cartStore = useCartStore();
  
  // Пример данных каталога с фейковыми супер-карами
  const products = ref([
    {
      id: 1,
      title: 'Ferrari LaFerrari',
      price: 3000000,
      image: 'FERRARI-LaFerrari-4797_34-2521221577.jpeg',
      description: 'Потрясающая машина, которая сочетает в себе невероятную мощность и элегантность.',
    },
    {
      id: 2,
      title: 'Lamborghini Aventador',
      price: 2500000,
      image: 'Lamborghini-Aventador-SVJ-Roadster-5-2744076872.jpg',
      description: 'Легенда в мире суперкаров, агрессивный и стильный дизайн.',
    },
    {
      id: 3,
      title: 'Bugatti Chiron',
      price: 3500000,
      image: 'wp2395122-2053238903.jpg',
      description: 'Самый быстрый серийный автомобиль в мире, идеально сбалансирован по всем характеристикам.',
    },
    {
      id: 4,
      title: 'McLaren P1',
      price: 2700000,
      image: 'McLaren-P1-10-1490142102.jpg',
      description: 'Эффектный гибрид, сочетающий стиль и скорость.',
    },
    {
      id: 5,
      title: 'Porsche 918 Spyder',
      price: 2300000,
      image: '5787f9a90e216345751fbc6fporsche-918-spyder-91562510.jpeg',
      description: 'Технологии и скорость в одном флаконе, этот суперкар покоряет дороги и сердца.',
    },
  ]);
  
  // Функции для работы с корзиной
  function addToCart(product) {
    cartStore.addToCart(product);
  }
  
  function removeFromCart(productId) {
    cartStore.removeFromCart(productId);
  }
  
  function clearCart() {
    cartStore.clearCart();
  }
  
  function checkout() {
    cartStore.checkout();
  }
  
  // Вычисляемые свойства для корзины
  const cartItems = computed(() => cartStore.state.items);
  const totalCount = computed(() => cartStore.state.totalCount);
  const totalPrice = computed(() => cartStore.state.totalPrice);
  
  // Функция формирования пути к изображению (предполагается, что изображения в public/statics)
  function getProductImage(filename) {
    return `/src/statics/${filename}`;
  }
  
  // Функция для установки фона карточки
  function getCardBackground(filename) {
    // Меняем путь к изображению на свой, если нужно
    return `
      background-image: url('${getProductImage(filename)}');
      background-size: cover;
      background-position: center;
    `;
  }
  </script>
  
  <style scoped lang="scss">
  /* Основной контейнер каталога */
  .catalog-container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Заголовок страницы */
  .page-title {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  /* Описание страницы */
  .page-description {
    font-size: 18px;
    color: #555;
    text-align: center;
    margin-bottom: 40px;
  }
  
  /* Фильтры и сортировка */
  .catalog-filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .filter-btn, .sort-btn {
    width: 180px;
  }
  
  /* Сетка товаров */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    justify-content: center;
    margin-bottom: 40px;
  }
  
  /* Карточка товара */
  .product-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    min-height: 250px; /* Задайте нужную высоту */
    color: #fff; /* Чтобы текст был виден на фоне */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    background-color: #ccc; /* fallback, если вдруг картинка не загрузилась */
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Оверлей, чтобы текст читался поверх картинки */
  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 15px;
  }
  
  /* Детали товара */
  .product-details {
    /* Дополнительные стили для текста */
  }
  
  .product-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .product-price {
    font-size: 16px;
    color: #28a745; /* Можно поменять на более светлый, например #3dd16c */
    margin-bottom: 6px;
  }
  
  .product-description {
    font-size: 14px;
    line-height: 1.4;
  }
  
  /* Кнопка внизу карточки */
  .product-actions {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px;
    text-align: center;
  }
  
  /* Кнопка "Добавить в корзину" */
  .add-to-cart-btn {
    width: 100%;
    font-weight: bold;
    border-radius: 30px;
  }
  
  /* Кнопка корзины */
  .cart-button-container {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .cart-btn {
    font-weight: bold;
    border-radius: 30px;
  }
  
  .cart-count {
    background-color: #ff4c4c;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    padding: 8px 14px;
    margin-left: 12px;
    font-size: 16px;
  }
  
  /* Модальное окно корзины */
  .cart-dialog {
    width: 450px;
    max-width: 90vw;
    border-radius: 15px;
    padding: 20px;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .cart-item-details {
    display: flex;
    align-items: center;
  }
  
  .cart-item-image {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
  }
  
  .cart-item-quantity {
    margin-left: 10px;
    color: #555;
  }
  
  .cart-total {
    font-weight: bold;
    padding-top: 20px;
    font-size: 18px;
    text-align: right;
  }
  
  .q-btn {
    border-radius: 30px;
    padding: 10px;
  }
  </style>
  