<template>
  <HeaderView></HeaderView>
  <MainView>
    <router-view />
  </MainView>
</template>

<script setup lang="ts">
import HeaderView from "./HeaderView.vue";
import MainView from "./MainView.vue";
</script>

<style scoped lang="scss"></style>
