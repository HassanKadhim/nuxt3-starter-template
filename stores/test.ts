import { acceptHMRUpdate, defineStore } from "pinia";

export const useTest = defineStore("test", {
  state: () => ({
    item: Object,
  }),
  getters: {},
  actions: {
    async fetch() {
      const data: any = await useBaseFetch("", {}, "GET");
      this.item = data.value;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTest, import.meta.hot));
}
