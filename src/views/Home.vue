<script setup>
import MainSlider from '@/components/MainSlider.vue'
import Advantages from '@/components/Advantages.vue'
import Projects from '@/components/Projects.vue'
</script>

<template>
  <div class="home">
    <MainSlider />
    <Advantages />
    <Projects />
  </div>
</template>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style> 