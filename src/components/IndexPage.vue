<template>
    <q-page class="q-pa-md">
      <div class="q-pa-md">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Добро пожаловать в наш проект Quasar!</div>
            <div class="text-subtitle2 q-mt-sm">
              Здесь вы можете увидеть демонстрацию различных анимаций и эффектов, реализованных с помощью Canvas и SVG.
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Перейти к анимации" color="primary" to="/animation" />
          </q-card-actions>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script setup>
  // Дополнительная логика можно добавить здесь при необходимости.
  </script>
  
  <style scoped>
  .my-card {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  