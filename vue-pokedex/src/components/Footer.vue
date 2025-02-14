<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="max-w-xs md:max-w-2xl lg:max-w-4xl mx-auto text-center py-4">
    <p class="font-mono">© {{ currentYear }} Igor Gomes</p>
  </footer>
</template>
