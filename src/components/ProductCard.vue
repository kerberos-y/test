<template>
    <q-card class="product-card">
      <q-img :src="getImageUrl(product.image)" ratio="4/3" />
      <q-card-section>
        <div class="text-h6">{{ product.title }}</div>
        <div class="text-subtitle2">Цена: {{ product.price }} грн</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Добавить в корзину" color="primary" @click="handleAddToCart" />
      </q-card-actions>
    </q-card>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
        validator(value) {
          // Проверка на наличие обязательных свойств в объекте
          if (!value || typeof value !== 'object') {
            return false; // Если это не объект, возвращаем false
          }
          return 'title' in value && 'price' in value && 'image' in value;
        }
      }
    },
    methods: {
      getImageUrl(filename) {
        // Преобразование для правильной работы с изображениями
        return `/statics/${filename}`
      },
      handleAddToCart() {
        // Эмитим событие для родителя
        this.$emit('add-to-cart', this.product);
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .product-card {
    width: 300px;
    /* Можно задать отступы или шрифты, если нужно */
  }
  </style>
  