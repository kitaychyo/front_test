<template>
  <div class="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  font-family: 'Arial', sans-serif;
  color: #fff;
  background-color: #0b0c10;
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

section {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
</style>
