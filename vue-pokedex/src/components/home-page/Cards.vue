<script setup>
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
</script>

<template>
  <RouterLink :to="'/pokemon/' + id">
    <div class="bg-white/10">
      <h1>{{ name.slice(0, 1).toUpperCase() + name.slice(1) }}</h1>
      <div>
        <img :src="imageUrl" :alt="name" />
      </div>
    </div>
  </RouterLink>
</template>
