<template>
<div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
        <div class="text-center text-h4 text-font q-pb-md text-grey-7">
            Create an Account
        </div>
        <div class="text-center text-font text-grey-7 text-subtitle1">
            Few things can make you have a feeling of balablue in a town hall, get that feeling by creating an account today
      </div>
        <q-card class="q-mt-xl" flat>
            <q-form class="q-gutter-md" @submit.prevent="Register">
                <q-input
            outlined
            v-model="name"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Enter your fullname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="email"
            class="text-font text-subtitle1"
            type="email"
            placeholder="Enter your Email Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="username"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Enter your username"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            v-model="password"
            outlined
            class="text-font text-subtitle1"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Enter your Password"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            outlined
            v-model="address"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Enter your Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="phone"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Enter your PhoneNumber"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          
          <div>
         
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Create Account"
              no-caps
              dense
              type="submit"
              color="primary"
              :loading="authStore.signUpStatus === 'LOADING' "
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
            </q-form>
        </q-card>
        <div class="q-mt-xl text-center text-grey-7 text-font text-subtitle2">
            Already have an account?
            <router-link to="/">
                <span  class="text-primary">Log In</span>
            </router-link>

        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent,ref} from 'vue'
import { useAuthStore } from '../../stores/AuthStore'

export default defineComponent({
    setup(){
const name = ref("")
const email = ref("")
const username = ref("")
const password = ref("")
const address = ref("")
const phone = ref("")
const authStore = useAuthStore()
const submitting = ref(false);


// create account
function Register(){
 authStore.registerUser({
  name:name.value,
    email:email.value,
    password:password.value,
    address:address.value,
    phone:phone.value,
    username:username.value
 })

}

return{
    name,
    email,
    password,
    address,
    phone,
    username,
    submitting,
    isPwd :ref(true),
    Register,
    authStore
}
    }

})

</script>