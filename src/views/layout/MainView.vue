<template>
  <main class="main">
    <div class="container">
      <slot></slot>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  padding-top: $header-height;
}
</style>
