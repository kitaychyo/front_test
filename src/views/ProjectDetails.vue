<template>
  <div class="project-details" v-if="project">
    <div class="container">
      <h1 class="project-details__title">{{ project.title }}</h1>
      
      <div class="project-details__content">
        <div class="project-details__info">
          <div class="project-details__text" v-if="project.description">
            <div v-for="(block, index) in project.description.blocks" 
                 :key="index"
                 v-html="parseBlock(block)">
            </div>
          </div>
        </div>

        <div class="project-details__gallery">
          <div class="project-details__main-image">
            <img v-if="project.photos && project.photos.length"
                 :src="`https://api.los-bio.ru/files/projects/${project.photos[currentPhotoIndex].name}`"
                 :alt="project.title">
            <button class="project-details__next-photo" @click="nextPhoto">
              Следующее фото
            </button>
          </div>
          <div class="project-details__thumbnails" v-if="project.photos && project.photos.length > 1">
            <div v-for="(photo, index) in project.photos" 
                 :key="photo.id"
                 class="project-details__thumbnail"
                 :class="{ 'active': currentPhotoIndex === index }"
                 @click="setCurrentPhoto(index)">
              <img :src="`https://api.los-bio.ru/files/projects/${photo.name}`" 
                   :alt="`${project.title} - фото ${index + 1}`">
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
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const project = ref(null)
const currentPhotoIndex = ref(0)

const parseBlock = (block) => {
  if (block.type === 'header') {
    return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
  }
  if (block.type === 'paragraph') {
    return `<p>${block.data.text}</p>`
  }
  if (block.type === 'list') {
    const listItems = block.data.items.map(item => `<li>${item}</li>`).join('')
    return block.data.style === 'ordered' 
      ? `<ol>${listItems}</ol>` 
      : `<ul>${listItems}</ul>`
  }
  return ''
}

const nextPhoto = () => {
  if (!project.value?.photos?.length) return
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % project.value.photos.length
}

const setCurrentPhoto = (index) => {
  currentPhotoIndex.value = index
}

const fetchProject = async () => {
  try {
    const response = await fetch(`https://api.los-bio.ru/projects/${route.params.slug}`)
    if (!response.ok) {
      throw new Error('Project not found')
    }
    const data = await response.json()
    project.value = data
  } catch (error) {
    console.error('Error fetching project:', error)
    router.push('/')
  }
}

onMounted(() => {
  fetchProject()
})
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
    margin-bottom: 40px;

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
}
</style> 