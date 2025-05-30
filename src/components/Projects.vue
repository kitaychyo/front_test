<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const projects = ref([]);

const parseEditorContent = (content) => {
  if (!content || !content.blocks) return '';
  return content.blocks
    .map(block => block.data.text || '')
    .join('\n')
    .replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
};

const fetchProjects = async () => {
  try {
    const response = await fetch('https://api.los-bio.ru/projects');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    projects.value = data.filter(project => project.published);
  } catch (error) {
    console.error('Error fetching projects:', error);
    projects.value = [];
  }
};

fetchProjects();

const navigateToDetails = (project) => {
  router.push(`/project/${project.slug}`);
};
</script>

<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects__title">Наши проекты</h2>
      <div class="projects__grid">
        <div v-for="project in projects" 
             :key="project.id" 
             class="projects__item"
             @click="navigateToDetails(project)">
          <div class="projects__image">
            <img v-if="project.photos && project.photos.length" 
                 :src="`https://api.los-bio.ru/files/projects/${project.photos[0].name}`" 
                 :alt="project.title">
          </div>
          <div class="projects__content">
            <h3 class="projects__item-title">{{ project.title }}</h3>
            <div class="projects__description">
              {{ parseEditorContent(project.short_description) }}
            </div>
            <div class="projects__meta">
              <div class="projects__meta-item" v-if="project.works">
                <span class="projects__label">Тип работ:</span> {{ project.works }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  padding: 100px 0;
  background-color: #02040D;
  color: #fff;

  &__title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
  }

  &__item {
    background: #0B0C10;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid transparent;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-5px);
      border-color: #0066FF;

      .projects__image img {
        transform: scale(1.05);
      }
    }
  }

  &__image {
    width: 100%;
    height: 280px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  &__content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #fff;
  }

  &__description {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    margin-bottom: 15px;
  }

  &__meta {
    margin-top: auto;
  }

  &__meta-item {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }

  &__label {
    color: #0066FF;
    font-weight: 500;
  }
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 1200px) {
  .projects {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 60px 0;

    &__grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    &__content {
      padding: 20px;
    }
  }

  .container {
    padding: 0 20px;
  }
}
</style>