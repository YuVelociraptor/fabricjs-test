<script setup lang="ts">
import { ref } from 'vue'
import { nav_links } from '~/utils/links'

const isOpen = ref<boolean>(false)

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value
}
const handleClick = (link: { label: string; to: string }) => {
  isOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">MySite</div>
    <div class="hamburger" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="['nav-links', { active: isOpen }]">
      <NuxtLink
          v-for="(link, index) in nav_links"
          :key="index"
          :to="link.to"
          @click="handleClick(link)"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: white;
}

.logo {
  font-size: 1.5em;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #ffcc00;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #444;
    position: absolute;
    top: 60px;
    right: 20px;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>