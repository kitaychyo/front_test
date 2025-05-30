<template>
  <div class="project-details" v-if="project">
    <div class="container">
      <h1 class="project-details__title">{{ project.title }}</h1>
      
      <div class="project-details__content">
        <!-- Описание проекта -->
        <div class="project-details__info">
          <div class="project-details__text" v-html="formattedDescription"></div>
        </div>

        <!-- Галерея -->
        <div class="project-details__gallery" v-if="hasPhotos">
          <div class="project-details__main-image">
            <img :src="currentPhotoUrl" :alt="project.title">
            <button 
              v-if="hasMultiplePhotos"
              class="project-details__next-photo" 
              @click="nextPhoto"
            >
              Следующее фото
            </button>
          </div>
          <div 
            v-if="hasMultiplePhotos" 
            class="project-details__thumbnails"
          >
            <div 
              v-for="(photo, index) in project.photos" 
              :key="photo.id"
              class="project-details__thumbnail"
              :class="{ 'active': currentPhotoIndex === index }"
              @click="setCurrentPhoto(index)"
            >
              <img :src="getPhotoUrl(photo)" :alt="project.title">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="project-details__loading">
    <div class="container">
      <p>Загрузка проекта...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const project = ref(null)
const currentPhotoIndex = ref(0)

// Вычисляемые свойства для упрощения шаблона
const hasPhotos = computed(() => project.value?.photos?.length > 0)
const hasMultiplePhotos = computed(() => project.value?.photos?.length > 1)
const currentPhotoUrl = computed(() => 
  hasPhotos.value 
    ? getPhotoUrl(project.value.photos[currentPhotoIndex.value])
    : ''
)

const formattedDescription = computed(() => {
  if (!project.value?.description?.blocks) return ''
  
  return project.value.description.blocks.map(block => {
    if (block.type === 'header') {
      return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
    }
    if (block.type === 'paragraph') {
      return `<p>${block.data.text}</p>`
    }
    if (block.type === 'list') {
      const items = block.data.items.map(item => `<li>${item}</li>`).join('')
      return block.data.style === 'ordered' ? `<ol>${items}</ol>` : `<ul>${items}</ul>`
    }
    return ''
  }).join('')
})

// Вспомогательные функции
const getPhotoUrl = (photo) => `https://api.los-bio.ru/files/projects/${photo.name}`

const nextPhoto = () => {
  if (!hasMultiplePhotos.value) return
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % project.value.photos.length
}

const setCurrentPhoto = (index) => {
  currentPhotoIndex.value = index
}

// Загрузка данных
const fetchProject = async () => {
  try {
    const response = await fetch(`https://api.los-bio.ru/projects/${route.params.slug}`)
    if (!response.ok) throw new Error('Project not found')
    project.value = await response.json()
  } catch (error) {
    console.error('Error fetching project:', error)
    router.push('/')
  }
}

onMounted(fetchProject)
</script>

<style lang="scss" scoped>
.project-details {
  padding-top: 160px;
  padding-bottom: 60px;
  background-color: #02040D;
  color: #fff;
  min-height: 100vh;

  &__title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 40px;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  }

  &__text {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 1rem;

    :deep(h4) {
      color: #0066FF;
      font-size: 1.1rem;
      margin: 20px 0 10px;
    }

    :deep(p) {
      margin-bottom: 15px;
    }
  }

  &__gallery {
    position: sticky;
    top: 100px;
  }

  &__main-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  &__next-photo {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 102, 255, 0.9);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
      background: #0066FF;
    }
  }

  &__thumbnails {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  &__thumbnail {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;

    &.active {
      opacity: 1;
      outline: 2px solid #0066FF;
    }

    &:hover {
      opacity: 1;
    }

    img {
      width: 100%;
      height: 60px;
      object-fit: cover;
    }
  }
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 1200px) {
  .project-details {
    &__content {
      grid-template-columns: 1fr;
    }

    &__gallery {
      position: static;
      margin-top: 40px;
    }
  }
}

@media (max-width: 768px) {
  .project-details {
    padding-top: 140px;

    &__thumbnails {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .container {
    padding: 0 20px;
  }
}
</style> 