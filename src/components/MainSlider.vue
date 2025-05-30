<template>
  <section class="main-slider">
    <Swiper
      :modules="[Autoplay, Pagination, Navigation]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :pagination="{
        clickable: true,
        el: '.main-slider__pagination'
      }"
      :navigation="false"
      class="main-slider__swiper"
    >
      <SwiperSlide v-for="slide in sortedSlides" :key="slide.id" class="main-slider__slide">
        <div class="container main-slider__container">
          <div class="main-slider__content">
            <h1 class="main-slider__title">{{ parseSlideData(slide.value).title }}</h1>
            <p class="main-slider__description">{{ parseSlideData(slide.value).description }}</p>
            <a :href="parseSlideData(slide.value).link" class="main-slider__button">
              {{ parseSlideData(slide.value).btnText || 'Перейти в каталог' }}
            </a>
          </div>
          <div class="main-slider__image-wrapper">
            <img 
              :src="getImageUrl(parseSlideData(slide.value).image)" 
              :alt="parseSlideData(slide.value).title" 
              class="main-slider__image"
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="container">
      <div class="main-slider__pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = ref([])

const sortedSlides = computed(() => {
  return [...slides.value].sort((a, b) => {
    const sortA = parseSlideData(a.value).sort
    const sortB = parseSlideData(b.value).sort
    return sortA - sortB
  })
})

const parseSlideData = (value) => {
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)
      return {
        title: parsed.title || '',
        description: parsed.description || '',
        link: parsed.link || '#',
        btnText: parsed.btnText || 'Подробнее',
        image: parsed.image || [],
        sort: parseInt(parsed.sort) || 0
      }
    } catch (error) {
      console.error('Error parsing slide data:', error)
      return {
        title: '',
        description: '',
        link: '#',
        btnText: 'Подробнее',
        image: [],
        sort: 0
      }
    }
  }
  return value
}

const getImageUrl = (image) => {
  if (!image || !image.length) return ''
  
  try {
    const baseUrl = 'https://api.los-bio.ru/files'
    return `${baseUrl}/${image[0].catalog}/${image[0].name}`
  } catch (error) {
    console.error('Error constructing image URL:', error)
    return ''
  }
}

const fetchSlides = async () => {
  try {
    const response = await fetch('https://api.los-bio.ru/info/group/slide')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    slides.value = data
  } catch (error) {
    console.error('Error fetching slides:', error)
    slides.value = []
  }
}

onMounted(() => {
  fetchSlides()
})
</script>

<style lang="scss" scoped>
.main-slider {
  position: relative;
  background-color: #02040D;
  padding: clamp(40px, 8vh, 80px) 0;
  min-height: calc(100vh - 80px);
  overflow: hidden;
  margin-top: 80px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(30px, 4vw, 60px);
    height: 100%;
    padding-top: 40px;
  }

  &__swiper {
    width: 100%;
    height: 100%;
  }

  &__slide {
    height: auto;
  }

  &__content {
    flex: 1;
    max-width: 600px;
    padding: clamp(20px, 4vh, 40px) 0;
  }

  &__title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 1.5rem;
  }

  &__description {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
  }

  &__button {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #0066FF;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.125rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background-color: #0052cc;
    }
  }

  &__image-wrapper {
    flex: 1;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__pagination {
    display: flex;
    gap: 10px;
    margin-top: 2rem;
  }

  :deep(.swiper-pagination-bullet) {
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.3);
    opacity: 1;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: #0066FF;
  }
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .main-slider {
    &__container {
      flex-direction: column;
      text-align: center;
    }

    &__content {
      max-width: 100%;
      order: 1;
    }

    &__image-wrapper {
      max-width: 400px;
      order: 2;
    }

    &__button {
      width: 100%;
      text-align: center;
    }
  }
}
</style> 