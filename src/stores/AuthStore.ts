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
enum status {
  LOADING = "LOADING",
  DONE = "DONE",
  ERROR = "ERROR",
  IDLE = "IDLE",
}

interface Istate {
  user: Iuser;
  logInStatus: status;
  signUpStatus: status;
}
interface LoginUser {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("authStore", {
  state: (): Istate => ({
    user: {
      email: "",
      name: "",
      password: "",
      address: "",
      phone: "",
      username: "",
    },
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
            this.user = data;
            this.logInStatus = status.DONE;
            localStorage.setItem("accessToken", data.token);
            router.push("/products");
          });
      } catch (error) {
        console.log(error);
        this.logInStatus = status.ERROR;
      }
    },
    // get user details
    async getUser() {
      try {
        const Id = await axios.get("https://fakestoreapi.com/users/1");
        this.user = Id.data;
      } catch (error) {
        console.log(error);
      }
    },
    async logOut() {
      try {
        localStorage.removeItem("accessToken");
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
