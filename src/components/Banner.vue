<script setup lang="ts">

</script>

<template>
  <section class="banner-section">
    <div class="container">
      <div class="banner-section__content">
        <div class="banner-section__text">
          <h1 class="banner-section__title">Автономная канализация для частного дома</h1>
          <p class="banner-section__description">
            Производим автономные канализации, очистные сооружения, накопительные емкости и различные комплектующие к ним.
          </p>
          <button class="banner-section__button">Перейти в каталог</button>
          <div class="banner-section__slider-dots">
            <span class="banner-section__dot banner-section__dot--active"></span>
            <span class="banner-section__dot"></span>
            <span class="banner-section__dot"></span>
          </div>
        </div>
        <div class="banner-section__image-wrapper">
          <img src="@/assets/sewage-system.svg" alt="Автономная канализация" class="banner-section__image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  background-color: #0B0C10;
  padding-top: clamp(40px, 8vh, 80px);
  padding-bottom: clamp(40px, 8vh, 80px);
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  width: 100vw;
  position: relative; 
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.banner-section__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(30px, 4vw, 60px);
  max-width: 1200px;
  margin: 0 auto;
}

.banner-section__text {
  flex: 1 1 55%;
  max-width: 620px;
}

.banner-section__title {
  font-size: clamp(2rem, 5vw, 3.2rem); 
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.15;
  color: #fff;
}

.banner-section__description {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.banner-section__button {
  background-color: #0066FF;
  color: #fff;
  border: none;
  padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  border-radius: 4px;
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
}

.banner-section__button:hover {
  background-color: #0052cc;
}

.banner-section__image-wrapper {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;
}

.banner-section__image {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.banner-section__slider-dots {
  margin-top: 3rem;
  display: flex;
  gap: 10px;
}

.banner-section__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.banner-section__dot--active,
.banner-section__dot:hover {
  background-color: #0066FF;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
}

@media (max-width: 992px) {
  .banner-section {
    min-height: calc(100vh - 80px);
  }
  .container {
    padding: 0 20px;
  }
  .banner-section__text {
    flex-basis: 50%;
  }
  .banner-section__image-wrapper {
    flex-basis: 50%;
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .banner-section__content {
    flex-direction: column;
    text-align: center;
  }
  .banner-section__text {
    margin-bottom: 2.5rem;
    max-width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .banner-section__description {
    max-width: 520px;
  }
  .banner-section__image-wrapper {
    max-width: 70%;
    margin: 0 auto;
  }
  .banner-section__slider-dots {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 16px;
  }
  .banner-section__title {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }
  .banner-section__description {
    font-size: clamp(0.9rem, 4vw, 1rem);
  }
  .banner-section__button {
    padding: clamp(0.6rem, 2.5vw, 0.8rem) clamp(1.2rem, 5vw, 1.5rem);
    font-size: clamp(0.8rem, 3vw, 0.9rem);
  }
  .banner-section__image-wrapper {
    max-width: 85%;
  }
}
</style>
