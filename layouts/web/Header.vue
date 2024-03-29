<script setup lang="ts">
import CrushHeader from '@nabux-crush/crush-header'

import CepolLogo from '@/assets/cepol.webp'

const menuItems = [
  { 
    name: 'Blog', 
    link: '/blogs' 
  },
  { 
    name: 'Contacto', 
    link: '/contact' 
  },
  {
    name: 'Servicio',
    link: '/service'
  }
]
</script>

<template>
  <div>
    <CrushHeader
      :logoSrc="CepolLogo"
      :brandName="'Cepol'">
        <template #menu-buttons="{ toggleMenu }">
          <a 
            v-for="(item, index) in menuItems"
            :key="index" 
            :href="item.link" 
            class="header-buttons-button"
            @click="toggleMenu">
              {{ item.name }}
          </a>
        </template>
    </CrushHeader>
  </div>
</template>

<style lang="scss" scoped>
:deep(.header){
  height: 15vh;
  background-color: #fff;
  color: white;
}
:deep(.header-figure-logo){
  height: 80px;
  display: none;
  @media (min-width: $tablet-upper-breakpoint){
    height: 110px;
    display: none;
  }
}
:deep(.toggle-menu){
  padding: 20px;
}
:deep(.toggle-menu-header){
  height: 10vh;
  justify-content: end;
}
:deep(.toggle-menu-header-figure){
  display: none;
}
:deep(.header-buttons-button){
  font-size: 2rem;
  color: #000;
  font-family: $primary-font;
  font-weight: $font-weight-bold;
  text-decoration: none;
  @media (min-width: $tablet-upper-breakpoint){
    font-size: 1.5rem;
  }
}
</style>