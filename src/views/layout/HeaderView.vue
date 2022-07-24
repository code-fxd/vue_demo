<template>
  <header class="header">
    <h1 class="logo">前端知识库</h1>
    <ul class="menu">
      <li
        v-for="nav in navData"
        :key="nav.path"
        class="menu-item"
        :class="{ active: path.startsWith(nav.path) }"
        @click="navLink(nav)"
      >
        <span>{{ nav.title }}</span>
      </li>
    </ul>
    <div class="right-entry">123</div>
  </header>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
interface Nav {
  path: string;
  title: string;
}
const navData = reactive<Nav[]>([
  {
    path: "/",
    title: "首页",
  },
  {
    path: "/wiki",
    title: "知识库",
  },
  {
    path: "/api",
    title: "接口服务",
  },
]);
const path = ref<string>(route.path);
onBeforeRouteUpdate((to) => {
  path.value = to.path;
});

function navLink(nav: Nav) {
  router.push(nav.path);
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $header-height;
  padding: $header-padding;
  background-color: $header-bg-color;
  border-bottom: $border-default;
  min-width: $min-width;
  display: flex;
  align-items: center;
  .logo {
    cursor: pointer;
  }
  .menu {
    display: flex;
    align-items: center;
    margin-left: 20px;
    height: 100%;
    flex: 1;
    .menu-item {
      cursor: pointer;
      padding: 0 16px;
      height: 100%;
      display: flex;
      align-items: center;
      @include text-hover($color-primary);

      &.active {
        color: $color-primary;
      }
    }
  }
}
</style>
