// src/stores/cartStore.js

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    totalCount: 0,
    totalPrice: 0
  }),
  actions: {
    addToCart(product) {
      const foundItem = this.items.find(item => item.id === product.id)

      if (foundItem) {
        foundItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }

      this.updateCartSummary()
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
      this.updateCartSummary()
    },
    clearCart() {
      this.items = []
      this.updateCartSummary()
    },
    updateCartSummary() {
      this.totalCount = this.items.reduce((count, item) => count + item.quantity, 0)
      this.totalPrice = this.items.reduce((price, item) => price + item.price * item.quantity, 0)
    }
  }
})
