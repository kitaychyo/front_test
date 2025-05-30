<template>
  <div class="home">
    <MainSlider />
    <Advantages />
    <Projects />
  </div>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue'
import Advantages from '@/components/Advantages.vue'
import Projects from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    MainSlider,
    Advantages,
    Projects
  }
}
</script>

<style scoped>
.home {
  padding: 0;
  background: #02040D;
}
</style> 