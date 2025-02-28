<template>
    <q-dialog v-model="visible" persistent>
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
              <div>
                {{ item.title }} — {{ item.price }} грн x {{ item.quantity }}
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
          <q-btn label="Закрыть" color="primary" @click="closeDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
  import { ref, computed, defineEmits } from 'vue';
  import { useCartStore } from 'src/store/cartStore.js';
  
  const emit = defineEmits(['update:modelValue']);
  const visible = ref(true);
  const cartStore = useCartStore();
  
  const cartItems = computed(() => cartStore.state.items);
  const totalPrice = computed(() => cartStore.state.totalPrice);
  
  function removeFromCart(productId) {
    cartStore.removeFromCart(productId);
  }
  
  function clearCart() {
    cartStore.clearCart();
  }
  
  function closeDialog() {
    visible.value = false;
    emit('update:modelValue', false);
  }
  </script>
  
  <style scoped lang="scss">
  .cart-dialog {
    width: 400px;
    max-width: 90vw;
  }
  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;
  }
  .cart-total {
    font-weight: bold;
    padding-top: 10px;
    text-align: right;
  }
  </style>
  