<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> GreenTechCommerce </q-toolbar-title>
        <q-space />

        <div class="q-px-sm">
          <q-avatar class="cursor-pointer" color="white" text-color="primary">
            {{ auth.user.username[0] }}
            <profile-card />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit q-pt-md">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <router-link :to="menuItem.link">
              <q-item
                class="q-pa-md"
                clickable
                :active="menuItem.label === 'Product'"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section class="text-h6">
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </router-link>

            <q-seperator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
        <div class="row flex justify-start q-pa-md fixed-bottom">
          <q-btn color="primary" label="LogOut" @click="auth.logOut" />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProfileCard from "../components/ProfileCard.vue";
import { useAuthStore } from "../stores/AuthStore";

const menuList = [
  {
    icon: "inventory_2",
    label: "Product",
    separator: true,
    link: "/products",
  },
  {
    icon: "shopping_cart",
    label: "Cart",
    separator: true,
    link: "/cart",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: { ProfileCard },
  setup() {
    const leftDrawerOpen = ref(false);
    const auth = useAuthStore();

    return {
      leftDrawerOpen,
      menuList,
      auth,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: gray;
}
</style>
