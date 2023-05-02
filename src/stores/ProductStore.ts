import axios from "axios";
import { defineStore } from "pinia";


export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    cart: {
      id: "",
      products: [
        {
          productId: "",
          quantity: "",
        },
      ],
    },
    newCart: {},
  }),
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
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

    async getCartProducts() {
      console.log("called");

      try {
        const cartData = await axios.get("https://fakestoreapi.com/carts/1");
        this.cart = cartData.data;
        console.log(this.cart);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCartProduct(productId: string) {
      console.log("called delete");
      try {
        this.cart.products = this.cart.products.filter((obj) => {
          alert("item deleted");
          return obj.productId !== productId;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
