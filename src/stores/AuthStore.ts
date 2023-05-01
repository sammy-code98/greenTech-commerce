import axios from "axios";
import { defineStore } from "pinia";
import router from "../router";

interface Iuser {
  email: string;
  name: string;
  password: string;
  address: string;
  phone: string;
  username: string;
}
interface LoginUser {
  username: string;
  password: string;
}
enum status {
  LOADING = "LOADING",
  DONE = "DONE",
  ERROR = "ERROR",
  IDLE = "IDLE",
}
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    logInStatus: status.IDLE,
    signUpStatus: status.IDLE,
  }),

  actions: {
    async registerUser(user: Iuser) {
      this.signUpStatus = status.LOADING;

      try {
        await axios
          .post("https://fakestoreapi.com/users", {
            name: user.name,
            email: user.email,
            password: user.password,
            address: user.address,
            phone: user.phone,
            username: user.username,
          })
          .then(({ data }) => {
            console.log({ data });
            this.user = data;
            this.signUpStatus = status.DONE;
            router.push("/");
          });
      } catch (error) {
        console.log(error);
        this.signUpStatus = status.ERROR;
      }
    },
    async loginUser(user: LoginUser) {
      this.logInStatus = status.LOADING;

      try {
        await axios
          .post("https://fakestoreapi.com/auth/login", {
            username: user.username,
            password: user.password,
          })
          .then(({ data }) => {
            console.log(data);
            this.user = data;
            this.logInStatus = status.DONE;

            localStorage.setItem("userToken", data.token);

            router.push("/products");
          });
      } catch (error) {
        console.log(error);
        this.logInStatus = status.ERROR;
      }
    },
  },
});
