import axios from "axios";
import { defineStore } from "pinia";

interface Iproduct {
  title: string;
  description: string;
  price: string;
  catergory: string;
  image: string;
}
interface IState {
  products: Iproduct[];
  cart: { id: string; products: { productId: string; quantity: string }[] };
}
export const useProductStore = defineStore("productStore", {
  state: (): IState => ({
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
      try {
        const productData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        this.products = productData.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getCartProducts() {
      try {
        const cartData = await axios.get("https://fakestoreapi.com/carts/1");
        this.cart = cartData.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCartProduct(productId: string) {
      try {
        this.cart.products = this.cart.products.filter((obj) => {
          alert("item deleted");
          return obj.productId !== productId;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct(product: Iproduct) {
      try {
        await axios
          .post("https://fakestoreapi.com/products", {
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.catergory,
            image: product.image,
          })
          .then(({ data }) => {
            this.products.unshift({ ...data, rating: { rate: 0, count: 0 } });
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
