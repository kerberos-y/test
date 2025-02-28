const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),  // Основной макет для всего приложения
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },  // Главная страница
      { path: 'animation', component: () => import('pages/AnimationPage.vue') }, // Страница анимаций
      { path: 'landing', component: () => import('pages/LandingPage.vue') }, // Страница с лэндингом
      { path: 'store', component: () => import('pages/CatalogPage.vue') } // Страница каталога товаров
    ]
  },

  // Маршрут для обработки несуществующих страниц
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue') // Страница ошибки
  }
]

export default routes
