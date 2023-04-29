<template>
    <q-layout view="hHh lpR fFf">
  
      <q-header class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
  
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Dashboard
          
          </q-toolbar-title>
          <q-space/>
          <div class="q-px-md">
            <q-avatar>
                <q-icon name="shopping_cart"/>
            </q-avatar>
          </div>
          <div class="q-px-sm">
            <q-avatar class="cursor-pointer">
              <img src="https://cdn.quasar.dev/img/avatar.png">

           <profile-card/>
            </q-avatar>
          </div>
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <q-scroll-area class="fit q-pt-md">
            <q-list>
                <template v-for="(menuItem, index) in menuList" :key="index">
                  <router-link :to="menuItem.link" >
                    <q-item  class="q-pa-md" clickable :active="menuItem.label === 'Product'"  v-ripple>
                        <q-item-section avatar>
                            <q-icon :name="menuItem.icon"/>
                        </q-item-section>
                        <q-item-section class="text-h6 ">
                        {{menuItem.label}}
                        </q-item-section>
                    </q-item>
                  </router-link>
                  
                    <q-seperator :key="'sep' + index" v-if="menuItem.separator"/>
                </template>
            </q-list>
        </q-scroll-area>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>
  
  <script lang='ts'>
  import {defineComponent,  ref } from 'vue'
  import ProfileCard from '../components/ProfileCard.vue'
  
  const menuList = [
  // {
  //   icon: 'person',
  //   label: 'Profile',
  //   separator: true
  // },
  {
    icon: 'inventory_2',
    label: 'Product',
    separator: true,
    link:"/products"
  },
  {
    icon: 'sort_by_alpha',
    label: 'Order',
    separator: true,
    link:"/orders"
  },
  {
    icon: 'rss_feed',
    label: 'Blog',
    separator: true,
    link:"/blog"
  },
  ]
  
 export default defineComponent({
    name:"MainLayout",
    components:{ProfileCard},
    setup () {
      const leftDrawerOpen = ref(false)
  
      return {
        leftDrawerOpen,
        menuList,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
 })
  </script>

  <style scoped>
   a{
    text-decoration: none;
    color: gray;
   }
</style>