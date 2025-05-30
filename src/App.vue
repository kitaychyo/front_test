<template>
  <div class="app">
    <HeaderComponent />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>

<style>
:root {
  color-scheme: dark;
}

* {
  box-shadow: none;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 0;
}

html {
  overflow-x: hidden;
  background-color: #02040D;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  background-color: #02040D;
  color: #fff;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #02040D;
  overflow-x: hidden;
  width: 100%;
  margin: 0;
  padding: 0;
}

.main {
  flex: 1;
  margin: 0;
  padding: 0;
}

.container {
  width: min(100%, 1200px);
  margin-inline: auto;
  padding-inline: 15px;
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
  outline: none;
}

button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

section {
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

@media (max-width: 768px) {
  .container {
    width: min(100% - 32px, 1200px);
  }
}
</style>

