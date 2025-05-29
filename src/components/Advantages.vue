<script setup lang="ts">
import { ref } from 'vue';
import icon1 from '@/assets/icons/accounting-1.svg'
import icon2 from '@/assets/icons/kprod-1.svg'
import icon3 from '@/assets/icons/Union.svg'
import icon4 from '@/assets/icons/advantages-icon-4.svg'

const advantages = ref([
  {
    iconUrl: icon1,
    title: "Оперативность расчётов",
    description: "Рассчитываем стоимость производства необходимого вам оборудования в течение нескольких часов после заявки"
  },
  {
    iconUrl: icon2,
    title: "Производство полного цикла",
    description: "Рассчитываем стоимость производства необходимого вам оборудования в течение нескольких часов после заявки"
  },
  {
    iconUrl: icon3,
    title: "Большой опыт работы",
    description: "Рассчитываем стоимость производства необходимого вам оборудования в течение нескольких часов после заявки"
  },
  {
    iconUrl: icon4,
    title: "Полное соответствие чертежам",
    description: "Рассчитываем стоимость производства необходимого вам оборудования в течение нескольких часов после заявки"
  }
]);
</script>

<template>
  <section class="advantages-section">
    <div class="container">
      <h2 class="advantages-section__title">Наши преимущества</h2>
      <div class="advantages-section__grid">
        <div class="advantage-card" v-for="(advantage, index) in advantages" :key="index">
          <div class="advantage-card__icon-wrapper">
            <img :src="advantage.iconUrl" :alt="advantage.title" class="advantage-card__icon" />
          </div>
          <h3 class="advantage-card__title">{{ advantage.title }}</h3>
          <p class="advantage-card__description">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages-section {
  background-color: #0B0C10;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.advantages-section__title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vh, 3.5rem);
  color: #fff;
}

.advantages-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
}

.advantage-card {
  background-color: #171A27;
  border-radius: 8px;
  padding: clamp(1.5rem, 3vh, 2rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 102, 255, 0.1);
}

.advantage-card__icon-wrapper {
  margin-bottom: 1.5rem;
  height: 48px;
  display: flex;
  align-items: center;
}

.advantage-card__icon {
  max-height: 100%;
  width: auto;
}

.advantage-card__title {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #fff;
}

.advantage-card__description {
  font-size: clamp(0.875rem, 2vw, 0.95rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .advantages-section__grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}
</style>