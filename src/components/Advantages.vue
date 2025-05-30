<template>
  <section class="advantages">
    <div class="container">
      <h2 class="advantages__title">Преимущества</h2>
      <div class="advantages__grid">
        <div v-for="advantage in advantages" :key="advantage.id" class="advantages__item">
          <div class="advantages__icon">
            <img :src="parseAdvantageData(advantage.value).icon" :alt="parseAdvantageData(advantage.value).title">
          </div>
          <h3 class="advantages__item-title">{{ parseAdvantageData(advantage.value).title }}</h3>
          <p class="advantages__item-text">{{ parseAdvantageData(advantage.value).description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const advantages = ref([])

const parseAdvantageData = (value) => {
  if (typeof value === 'string') {
    try {
      return JSON.parse(value)
    } catch (error) {
      console.error('Error parsing advantage data:', error)
      return {
        title: '',
        description: '',
        icon: ''
      }
    }
  }
  return value
}

const fetchAdvantages = async () => {
  try {
    const response = await fetch('https://api.los-bio.ru/info/group/advantages')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    advantages.value = data
  } catch (error) {
    console.error('Error fetching advantages:', error)
    advantages.value = []
  }
}

onMounted(() => {
  fetchAdvantages()
})
</script>

<style lang="scss" scoped>
.advantages {
  padding: 100px 0;
  background-color: #0B0C10;
  color: #fff;

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 30px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);

      .advantages__icon {
        color: #0066FF;
        background: rgba(0, 102, 255, 0.1);
      }
    }
  }

  &__icon {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.3s ease;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  &__item-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #fff;
  }

  &__item-text {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
  }
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 1200px) {
  .advantages {
    padding: 80px 0;

    &__grid {
      gap: 20px;
    }
  }
}

@media (max-width: 991px) {
  .advantages {
    padding: 60px 0;

    &__title {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    &__item {
      padding: 25px;
    }

    &__icon {
      width: 56px;
      height: 56px;

      img {
        width: 32px;
        height: 32px;
      }
    }

    &__item-title {
      font-size: 1.25rem;
    }
  }
}

@media (max-width: 768px) {
  .advantages {
    &__grid {
      grid-template-columns: 1fr;
      max-width: 600px;
    }

    &__item {
      text-align: center;

      &:hover {
        transform: none;
      }
    }

    &__icon {
      margin: 0 auto 20px;
    }
  }

  .container {
    padding: 0 20px;
  }
}
</style>