<template>
    <q-page class="q-pa-md">
      <div class="q-gutter-md">
        <q-btn label="Canvas Animation" color="primary" @click="mode = 'canvas'" />
        <q-btn label="SVG Animation" color="secondary" @click="mode = 'svg'" />
      </div>
      <div class="q-mt-lg">
        <!-- Рендерим выбранный компонент -->
        <component :is="currentComponent" />
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import CanvasAnimation from 'components/CanvasAnimation.vue';
  import SvgAnimation from 'components/SvgAnimation.vue';
  
  const mode = ref('canvas');
  const currentComponent = computed(() => mode.value === 'canvas' ? CanvasAnimation : SvgAnimation);
  </script>
  