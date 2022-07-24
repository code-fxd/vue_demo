<template>
  <div class="card-list">
    <div class="area-header">{{ title }}</div>
    <div class="area-body">
      <ul>
        <li class="data-item" v-for="item in data" :key="item.id">
          <div @click="titleHandle(item)" class="item-title">
            {{ item.title }}
          </div>
          <div class="item-describe">{{ item.describe }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cardCategoryInterface } from "@/interface";

defineProps<{
  title: string;
  data?: cardCategoryInterface[];
}>();

const emit = defineEmits<{
  (e: "title-click", item: cardCategoryInterface): void;
}>();

function titleHandle(item: cardCategoryInterface) {
  emit("title-click", item);
}
</script>

<style scoped lang="scss">
.card-list {
  margin-top: $margin-xl;
  margin-bottom: $margin-xxl;
  .area-header {
    margin-bottom: $margin-xl;
    font-size: $font-size-title-1;
    font-weight: 700;
  }

  .area-body {
    .data-item {
      padding: $padding-xl 0;
      border-bottom: $border-default;
      &:hover {
        background-color: $bg-color-overlay;
      }
      .item-title {
        cursor: pointer;
        font-size: $font-size-title-2;
        margin-bottom: $margin-m;
        @include text-hover($color-primary, $underline: true);
      }
      .item-describe {
        color: $text-color-secondary;
      }
    }
  }
}
</style>
