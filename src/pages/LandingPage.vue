<template>
    <q-page class="landing-page">
      <!-- HERO SECTION -->
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">Открой новую эру возможностей</h1>
          <p class="hero-subtitle">
            Продукт, который изменит твою жизнь. Повышай эффективность и наслаждайся результатами уже сегодня!
          </p>
          <q-btn class="hero-btn" label="Купить сейчас" color="primary" />
        </div>
      </section>
      
      <!-- FEATURES SECTION -->
      <section class="features">
        <div class="container">
          <h2 class="section-title">Почему выбирают нас?</h2>
          <div class="features-list">
            <div class="feature-item">
              <q-icon name="flash_on" size="4rem" class="feature-icon" />
              <h3 class="feature-title">Мгновенные результаты</h3>
              <p>Почувствуй эффект уже через несколько дней!</p>
            </div>
            <div class="feature-item">
              <q-icon name="security" size="4rem" class="feature-icon" />
              <h3 class="feature-title">Абсолютная безопасность</h3>
              <p>Ваши данные – наша главная забота.</p>
            </div>
            <div class="feature-item">
              <q-icon name="trending_up" size="4rem" class="feature-icon" />
              <h3 class="feature-title">Рост доходов</h3>
              <p>Увеличьте продажи и достигните новых высот!</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- PRODUCT SHOWCASE -->
      <section class="product">
        <div class="container">
          <h2 class="section-title">Наш продукт</h2>
          <div class="product-content">
            <img src="src/statics/product.png" alt="Продукт" class="product-image" />
            <div class="product-info">
              <h3>Уникальное решение для вашего успеха</h3>
              <p>
                Наш продукт сочетает передовые технологии и стильный дизайн. Это инвестиция в ваше будущее, которая принесёт ощутимые результаты.
              </p>
              <q-btn class="product-btn" label="Узнать больше" color="accent" />
            </div>
          </div>
        </div>
      </section>
      
      <!-- TESTIMONIALS SECTION -->
      <section class="testimonials">
        <div class="container">
          <h2 class="section-title">Отзывы наших клиентов</h2>
          <div class="testimonials-list">
            <div class="testimonial-item">
              <img src="src/statics/man1.jpg" alt="Клиент" class="testimonial-img" />
              <p class="testimonial-text">"Этот продукт перевернул мой бизнес! Рекомендую всем, кто стремится к успеху!"</p>
              <h4 class="testimonial-author">— Алексей, предприниматель</h4>
            </div>
            <div class="testimonial-item">
              <img src="src/statics/woman.jpg" alt="Клиент" class="testimonial-img" />
              <p class="testimonial-text">"Никогда не видел такого эффекта. Результаты превзошли все ожидания."</p>
              <h4 class="testimonial-author">— Мария, менеджер по продажам</h4>
            </div>
            <div class="testimonial-item">
              <img src="src/statics/man2.jpg" alt="Клиент" class="testimonial-img" />
              <p class="testimonial-text">"Супер качество, инновации и внимание к деталям. Теперь я знаю, что такое успех!"</p>
              <h4 class="testimonial-author">— Дмитрий, маркетолог</h4>
            </div>
          </div>
        </div>
      </section>
      
      <!-- PARTNERS SECTION -->
      <section class="partners">
        <div class="container">
          <h2 class="section-title">Наши партнёры</h2>
          <div class="partners-logos">
            <img src="src/statics/1.png" alt="Партнёр 1" class="partner-logo" />
            <img src="src/statics/2.png" alt="Партнёр 2" class="partner-logo" />
            <img src="src/statics/3.png" alt="Партнёр 3" class="partner-logo" />
            <img src="src/statics/4.png" alt="Партнёр 4" class="partner-logo" />
          </div>
        </div>
      </section>
      
      <!-- CALL TO ACTION (CTA) SECTION -->
      <section class="cta">
        <div class="container">
          <h2 class="cta-title">Готовы изменить свою жизнь?</h2>
          <p class="cta-subtitle">Не упустите шанс приобрести продукт, который принесёт успех и процветание!</p>
          <q-btn class="cta-btn" label="Купить сейчас" color="primary" />
        </div>
      </section>
      
      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <p>© 2025 Наша компания. Все права защищены.</p>
        </div>
      </footer>
    </q-page>
  </template>
  
  
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  :root {
    --primary-color: #2575fc;
    --secondary-color: #6a11cb;
    --accent-color: #ff7eb3;
    --dark-overlay: rgba(0, 0, 0, 0.6);
    --light-color: #fff;
    --background-gradient: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
    --button-gradient: linear-gradient(135deg, var(--accent-color), #ff758c);
  }
  
  .landing-page {
    font-family: 'Roboto', sans-serif;
    color: #333;
    
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    section {
      padding: 80px 0;
      position: relative;
      overflow: hidden;
    }
    
    // HERO SECTION
    .hero {
      position: relative;
      background: var(--background-gradient);
      background-image: url('statics/hero-bg.jpg');
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
      color: var(--light-color);
      text-align: center;
      padding: 150px 0;
      
      .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--dark-overlay);
        z-index: 1;
      }
      
      .hero-content {
        position: relative;
        z-index: 2;
        animation: fadeInDown 1s ease-out;
        
        .hero-title {
          font-size: 5rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        }
        
        .hero-subtitle {
          font-size: 1.75rem;
          margin-bottom: 40px;
          text-shadow: 1px 1px 8px rgba(0,0,0,0.5);
        }
        
        .hero-btn {
          font-size: 1.5rem;
          padding: 16px 50px;
          background: var(--button-gradient);
          color: var(--light-color);
          border: none;
          border-radius: 40px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease, filter 0.3s ease;
          &:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
          }
        }
      }
    }
    
    // FEATURES SECTION
    .features {
      background: #fff;
      .section-title {
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 60px;
        color: #2c2c3d;
        animation: fadeInUp 1s ease-out;
      }
      
      .features-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
        
        .feature-item {
          flex: 1;
          max-width: 350px;
          background: #f9f9f9;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 1s ease-out;
          &:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          
          .feature-icon {
            color: var(--primary-color);
            margin-bottom: 20px;
          }
          
          .feature-title {
            font-size: 2rem;
            margin-bottom: 15px;
            color: #2c2c3d;
          }
          
          p {
            font-size: 1.1rem;
            color: #555;
          }
        }
      }
    }
    
    // PRODUCT SECTION
    .product {
      background: #f0f2f5;
      .section-title {
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 60px;
        color: #2c2c3d;
        animation: fadeInUp 1s ease-out;
      }
      
      .product-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 40px;
        
        .product-image {
          flex: 1;
          max-width: 500px;
          animation: slideInLeft 1s ease-out;
        }
        
        .product-info {
          flex: 1;
          animation: slideInRight 1s ease-out;
          h3 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #2c2c3d;
          }
          p {
            font-size: 1.25rem;
            margin-bottom: 30px;
            color: #555;
          }
          .product-btn {
            font-size: 1.5rem;
            padding: 16px 40px;
            background: var(--button-gradient);
            color: var(--light-color);
            border: none;
            border-radius: 40px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, filter 0.3s ease;
            &:hover {
              transform: scale(1.1);
              filter: brightness(1.2);
            }
          }
        }
      }
    }
    
    // TESTIMONIALS SECTION
    .testimonials {
      background: #fff;
      .section-title {
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 60px;
        color: #2c2c3d;
        animation: fadeInUp 1s ease-out;
      }
      
      .testimonials-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 30px;
        
        .testimonial-item {
          flex: 1;
          max-width: 350px;
          background: #f9f9f9;
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 1s ease-out;
          &:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          
          .testimonial-img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 20px;
            border: 3px solid var(--primary-color);
          }
          
          .testimonial-text {
            font-size: 1.2rem;
            margin-bottom: 20px;
            color: #555;
            font-style: italic;
          }
          
          .testimonial-author {
            font-size: 1.1rem;
            font-weight: bold;
            color: #2c2c3d;
          }
        }
      }
    }
    
    // PARTNERS SECTION
    .partners {
      background: #f0f2f5;
      .section-title {
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 60px;
        color: #2c2c3d;
        animation: fadeInUp 1s ease-out;
      }
      
      .partners-logos {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 40px;
        
        .partner-logo {
          width: 150px;
          opacity: 0.8;
          transition: transform 0.3s ease, opacity 0.3s ease;
          &:hover {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      }
    }
    
    // CALL TO ACTION (CTA) SECTION
    .cta {
      background: var(--background-gradient);
      color: var(--light-color);
      text-align: center;
      padding: 100px 20px;
      
      .cta-title {
        font-size: 4rem;
        margin-bottom: 20px;
        text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        animation: fadeInUp 1s ease-out;
      }
      
      .cta-subtitle {
        font-size: 1.75rem;
        margin-bottom: 40px;
        text-shadow: 1px 1px 8px rgba(0,0,0,0.5);
        animation: fadeInUp 1s ease-out;
      }
      
      .cta-btn {
        font-size: 1.5rem;
        padding: 16px 50px;
        background: var(--button-gradient);
        color: var(--light-color);
        border: none;
        border-radius: 40px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease, filter 0.3s ease;
        animation: fadeInUp 1s ease-out;
        &:hover {
          transform: scale(1.1);
          filter: brightness(1.2);
        }
      }
    }
    
    // FOOTER
    .footer {
      background: #2c2c3d;
      color: var(--light-color);
      text-align: center;
      padding: 30px 0;
      font-size: 1.1rem;
      animation: fadeInUp 1s ease-out;
    }
  }
  
  // Анимации
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  </style>
  