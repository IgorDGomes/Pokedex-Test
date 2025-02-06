<script setup>
import { usePokemonStore } from "@/stores/pokemon";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-vue-next";
import { reactive } from "vue";

const pokemonStore = usePokemonStore();

const state = reactive({
  page: {
    type: String,
  },
  changePage: function (e) {
    e.preventDefault();
    console.log(state.page);
    pokemonStore.setPage(state.page);
    console.log(pokemonStore.currentPage);
  },
});
</script>

<template>
  <div class="flex items-center justify-center py-10">
    <button
      @click="pokemonStore.previousPage()"
      :disabled="!pokemonStore.previous"
      class="disabled:text-zinc-500"
    >
      <ArrowLeftCircleIcon class="size-10" />
    </button>
    <form @submit="(e) => state.changePage(e)">
      <input
        type="text"
        :placeholder="pokemonStore.currentPage"
        :value="pokemonStore.currentPage"
        @change="(e) => (state.page = e.target.value)"
      />
    </form>
    <span>/ {{ pokemonStore.totalPages }}</span>
    <button
      @click="pokemonStore.nextPage()"
      :disabled="!pokemonStore.next"
      class="disabled:text-zinc-500"
    >
      <ArrowRightCircleIcon class="size-10" />
    </button>
  </div>
</template>
