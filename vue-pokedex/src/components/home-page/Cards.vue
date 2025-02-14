<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const userMouseOver = ref(false);
const imageNotFound = ref(false);
</script>

<template>
  <RouterLink :to="'/pokemon/' + id">
    <div
      @mouseover="userMouseOver = true"
      @mouseleave="userMouseOver = false"
      class="bg-white/10 rounded-lg py-4 flex flex-col items-center justify-center gap-4 min-h-80"
    >
      <h1 class="font-semibold text-lg">
        {{ name.slice(0, 1).toUpperCase() + name.slice(1) }}
      </h1>
      <div>
        <p v-show="userMouseOver && !imageNotFound">Hover me</p>
        <img
          v-show="!userMouseOver && !imageNotFound"
          :src="imageUrl"
          :alt="name"
          @error="(e) => (imageNotFound = true)"
          class="size-40"
        />
        <img
          v-show="imageNotFound"
          src="../../assets/questionMark.jpg"
          :alt="name"
          class="size-40 rounded-full"
        />
        <p v-show="imageNotFound" class="font-semibold text-center py-4">
          Image not found :/
        </p>
      </div>
    </div>
  </RouterLink>
</template>
