<script setup>
import Cards from "@/components/home-page/Cards.vue";
import Navigation from "@/components/home-page/Navigation.vue";
import { usePokemonStore } from "@/stores/pokemon";
import { onMounted } from "vue";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemons();
});
</script>

<template>
  <main class="max-w-xs md:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl mx-auto">
    <div
      v-if="pokemonStore.pokemons.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2"
    >
      <Cards
        v-for="pokemon in pokemonStore.pokemons"
        :key="pokemon.name"
        :name="pokemon.name"
        :id="pokemon.url.slice(34)"
        :imageUrl="
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
          pokemon.url.slice(34).split('/').join('') +
          '.png'
        "
      />
    </div>
    <div v-else>Loading...</div>
    <Navigation />
  </main>
</template>
