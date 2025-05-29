<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const projects = ref([
  {
    id: 1,
    title: 'Очистные сооружения',
    description: 'Монтаж локальных очистных сооружений для загородного дома',
    imageUrl: '/img/image 36.jpg'
  },
  {
    id: 2,
    title: 'Канализационная насосная станция',
    description: 'Установка КНС для многоквартирного дома',
    imageUrl: '/img/image 37.jpg'
  },
  {
    id: 3,
    title: 'Промышленные очистные',
    description: 'Проектирование и монтаж промышленных очистных сооружений',
    imageUrl: '/img/image 38.jpg'
  }
]);

const navigateToDetails = (projectId) => {
  console.log('Navigating to project:', projectId);
  router.push(`/project/${projectId}`).catch(err => {
    console.error('Navigation failed:', err);
  });
};
</script>

<template>
  <section class="projects-section">
    <div class="container">
      <h2 class="projects-section__title">Наши проекты</h2>
      <div class="projects-section__grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-card__image-wrapper">
            <img :src="project.imageUrl" :alt="project.title" class="project-card__image" />
          </div>
          <div class="project-card__content">
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__description">{{ project.description }}</p>
            <router-link :to="`/project/${project.id}`" custom v-slot="{ navigate }">
              <button @click="navigate" class="project-card__button">Подробнее</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: #0B0C10;
  padding: 80px 0;
  margin-bottom: 80px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.projects-section__title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: #fff;
}

.projects-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: #171A27;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card__image-wrapper {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-card__image {
  transform: scale(1.05);
}

.project-card__content {
  padding: 24px;
}

.project-card__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #fff;
}

.project-card__description {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
}

.project-card__button {
  background-color: transparent;
  color: #0066FF;
  border: 2px solid #0066FF;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-card__button:hover {
  background-color: #0066FF;
  color: #fff;
}

@media (max-width: 992px) {
  .projects-section {
    padding: 60px 0;
  }

  .projects-section__title {
    font-size: 32px;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 40px 0;
  }

  .projects-section__grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }

  .project-card__image-wrapper {
    height: 200px;
  }
}

@media (max-width: 576px) {
  .projects-section {
    padding: 30px 0;
  }

  .projects-section__title {
    font-size: 28px;
    margin-bottom: 30px;
  }

  .project-card__content {
    padding: 20px;
  }

  .project-card__title {
    font-size: 18px;
  }

  .project-card__description {
    font-size: 14px;
  }
}
</style>