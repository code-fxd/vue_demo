<template>
  <div class="container">
    <CardList title="接口服务" />
    <CardList title="前端知识" :data="webCardList" @title-click="toItemWiki" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CardList from "@/components/careList/CardList.vue";
import { cardCategoryInterface } from "@/interface";
import { getCardList } from "@/api";
// 获取前端卡片数据
const webCardList = reactive<cardCategoryInterface[]>([]);
getCardList().then((res) => {
  webCardList.push(...res.data);
});

const toItemWiki = (item: cardCategoryInterface) => {
  console.log(item);
};
</script>

<style scoped lang="scss"></style>
