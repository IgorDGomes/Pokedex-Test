import { defineStore } from "pinia";

const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const usePokemonStore = defineStore("pokemons", {
  state: () => ({
    /** @type {{ count: number, next: string | null, previous: string | null, results: { name: string, url: string }[] }} */
    response: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
    limit: 24,
    offset: 0,
  }),
  getters: {
    pokemons: (state) => state.response.results,
    next: (state) => state.response.next,
    previous: (state) => state.response.previous,
    count: (state) => state.response.count,
    totalPages: (state) => Math.ceil(state.count / state.limit),
    currentPage: (state) => Math.floor(state.offset / state.limit) + 1,
  },
  actions: {
    async fetchPokemons() {
      try {
        const url = `${BASE_API_URL}/?offset=${this.offset}&limit=${this.limit}`;
        const response = await fetch(url);
        const data = await response.json();
        this.response = data;
      } catch (error) {
        console.error("Error fetching Pokemon data: ", error);
      }
    },

    nextPage() {
      if (this.next) {
        this.offset += this.limit;
        this.fetchPokemons();
      }
    },

    previousPage() {
      if (this.previous) {
        this.offset -= this.limit;
        this.fetchPokemons();
      }
    },

    setPage(page) {
      const newOffset = (page - 1) * this.offset;
      if (newOffset >= 0 && newOffset < this.count) {
        this.offset = newOffset;
        this.currentPage = page;
        this.fetchPokemons();
      }
    },
  },
});
