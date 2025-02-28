<template>
  <q-page class="q-pa-md">
    <!-- Основная карточка-приветствие -->
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Добро пожаловать в наш проект Quasar!</div>
          <div class="text-subtitle1 q-mb-md">
          Выберите нужную страницу для начала работы
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn outline label="Анимация CANVA и SVG" color="primary" to="/animation" class="q-mr-sm" />
          <q-btn outline label="Landing" color="secondary" to="/landing" class="q-mr-sm" />
          <q-btn outline label="Store" color="accent" to="/store" />
        </q-card-actions>
      </q-card>
    </div>

        <!-- Информационный баннер -->
    <div class="q-mt-lg">
      <q-banner class="bg-primary text-white">
        <template v-slot:avatar>
          <q-icon name="info" size="2rem" />
        </template>
        Дополнительная информация: здесь можно разместить новости, обновления или интересные факты о проекте.
      </q-banner>
    </div>

    <!-- Список особенностей проекта -->
    <div class="q-mt-lg">
      <q-list bordered padding>
        <q-item-label header>Особенности проекта</q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="check_circle" color="green" />
          </q-item-section>
          <q-item-section>
            Интуитивно понятный интерфейс и удобная навигация.
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="flash_on" color="amber" />
          </q-item-section>
          <q-item-section>
            Высокая производительность и современный дизайн.
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="extension" color="purple" />
          </q-item-section>
          <q-item-section>
            Легкая интеграция с различными API и сторонними сервисами.
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
  // Дополнительная логика можно добавить здесь, если потребуется.
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
