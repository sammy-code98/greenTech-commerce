import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProducts() {
      console.log("called");
      try {
        const productData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        this.products = productData.data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
