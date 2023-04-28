<template>
    <div class="row justify-center">

        <div class="col-md-6 col-xs-10 q-mt-xl">

            <div class="text-center text-h4  q-pb-md text-grey-7">
        Log In
      </div>
      <div class="text-center text-font text-grey-7 text-subtitle1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, placeat veritatis, vel minus rem ab excepturi deserunt sit,
         eveniet sequi quibusdam dolor impedit quis reprehenderit dolore! Magnam blanditiis quaerat molestias.
      </div>
<q-card class="q-mt-xl" flat>
    <q-form class="q-gutter-md">
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
          <div   class="text-right text-font text-primary text-weight-meduim text-subtitle2">
            Forgot Password?
          </div>
          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Log In"
              no-caps
              dense
              type="submit"
              color="primary"
              :loading="submitting"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>

    </q-form>
</q-card>
<div class="q-mt-xl text-center text-grey-7 text-font text-subtitle2">
    Don't have an account yet?
    <router-link to="/sign-up">
        <span class="text-primary">Create Account</span>
    </router-link>
</div>
    </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'


export default defineComponent({
    setup() {
        const email = ref("")
        const password = ref("")
        const submitting = ref(false)

        return {
        email,
        password,
        isPwd: ref(true),
        submitting

    }
        
    },
    
})
</script>
