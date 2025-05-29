<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const project = ref(null)

const projects = [
  {
    id: 1,
    title: 'Очистные сооружения',
    description: 'Монтаж локальных очистных сооружений для загородного дома',
    imageUrl: '/img/image 36.jpg',
    fullDescription: 'Проект включает в себя полный цикл работ по установке локальных очистных сооружений для загородного дома. Система обеспечивает эффективную очистку сточных вод с учетом всех экологических норм.',
    specifications: [
      'Производительность: 1.5 м³/сутки',
      'Количество пользователей: до 5 человек',
      'Потребляемая мощность: 50 Вт',
      'Габариты: 1.5м x 1.5м x 2м'
    ],
    features: [
      'Автономная работа',
      'Простое обслуживание',
      'Долгий срок службы',
      'Экологическая безопасность'
    ]
  },
  {
    id: 2,
    title: 'Канализационная насосная станция',
    description: 'Установка КНС для многоквартирного дома',
    imageUrl: '/img/image 37.jpg',
    fullDescription: 'Комплексное решение для организации системы канализации в многоквартирном доме. Проект включает установку современной КНС с высокой производительностью и надежностью.',
    specifications: [
      'Производительность: 25 м³/час',
      'Напор: до 15 метров',
      'Мощность насосов: 2x5.5 кВт',
      'Объем накопительной емкости: 10 м³'
    ],
    features: [
      'Автоматизированное управление',
      'Резервное электроснабжение',
      'Система диспетчеризации',
      'Антикоррозийная защита'
    ]
  },
  {
    id: 3,
    title: 'Промышленные очистные',
    description: 'Проектирование и монтаж промышленных очистных сооружений',
    imageUrl: '/img/image 38.jpg',
    fullDescription: 'Масштабный проект по созданию системы очистки промышленных стоков. Включает механическую и биологическую очистку, а также систему обеззараживания.',
    specifications: [
      'Производительность: 1000 м³/сутки',
      'Степень очистки: 98%',
      'Площадь застройки: 2000 м²',
      'Энергопотребление: 75 кВт/час'
    ],
    features: [
      'Многоступенчатая очистка',
      'Автоматизированный контроль',
      'Возможность расширения',
      'Соответствие всем экологическим нормам'
    ]
  }
]

const loadProject = () => {
  console.log('Loading project, route params:', route.params)
  const projectId = Number(route.params.id)
  project.value = projects.find(p => p.id === projectId) || null
  console.log('Found project:', project.value)
  
  if (!project.value) {
    console.log('Project not found, redirecting to home')
    router.push('/')
  }
}

onMounted(() => {
  loadProject()
})

// Добавляем отслеживание изменений параметров маршрута
watch(
  () => route.params.id,
  () => {
    loadProject()
  }
)

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <main class="main">
    <div v-if="project" class="project-details">
      <div class="container">
        <button @click="goBack" class="back-button">
          ← Назад к проектам
        </button>
        
        <div class="project-details__content">
          <div class="project-details__info">
            <h1 class="project-details__title">{{ project.title }}</h1>
            <p class="project-details__description">{{ project.fullDescription }}</p>
            
            <div class="project-details__section">
              <h2 class="project-details__subtitle">Технические характеристики</h2>
              <ul class="project-details__list">
                <li v-for="spec in project.specifications" :key="spec">{{ spec }}</li>
              </ul>
            </div>
            
            <div class="project-details__section">
              <h2 class="project-details__subtitle">Особенности проекта</h2>
              <ul class="project-details__list">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
          </div>
          
          <div class="project-details__image-wrapper">
            <img :src="project.imageUrl" :alt="project.title" class="project-details__image" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  flex: 1;
  margin-top: 140px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  flex-direction: column;
}

.project-details {
  padding: 80px 0;
  background-color: #0B0C10;
  flex: 1;
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

.back-button {
  background: none;
  border: none;
  color: #0066FF;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 40px;
  transition: color 0.3s;
}

.back-button:hover {
  color: #0052cc;
}

.project-details__content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 80px;
  align-items: start;
  margin-bottom: 60px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.project-details__image-wrapper {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: sticky;
  top: 160px;
}

.project-details__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.project-details__info {
  color: #fff;
  width: 100%;
}

.project-details__title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
}

.project-details__description {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
}

.project-details__section {
  margin-bottom: 40px;
}

.project-details__subtitle {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #fff;
}

.project-details__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-details__list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.8);
}

.project-details__list li::before {
  content: "•";
  color: #0066FF;
  position: absolute;
  left: 0;
  top: 0;
}

@media (max-width: 1200px) {
  .container {
    padding: 0 30px;
  }
  
  .project-details__content {
    gap: 60px;
  }
}

@media (max-width: 992px) {
  .container {
    padding: 0 20px;
  }

  .project-details__content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .project-details__image-wrapper {
    position: relative;
    top: 0;
    order: -1;
  }
}

@media (max-width: 768px) {
  .project-details {
    padding: 40px 0;
  }

  .project-details__title {
    font-size: 28px;
  }

  .project-details__description {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .project-details {
    padding: 30px 0;
  }

  .container {
    padding: 0 16px;
  }

  .project-details__title {
    font-size: 24px;
  }

  .project-details__subtitle {
    font-size: 20px;
  }
}
</style>