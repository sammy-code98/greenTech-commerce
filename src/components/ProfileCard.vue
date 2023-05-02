<template>
<q-menu auto-close fit  :offset="[-10, 10]">
        <q-card class="my-card q-px-xl q-py-sm row justify-center">
        <q-card-section>
            <q-avatar color="primary" text-color="white" size="100px">
                {{ auth.user.username[0] }}
            </q-avatar>
            <div class="q-mt-lg">
                <div class="text-h6 text-grey-7 text-center font-bold" >{{auth.user.username }}</div>
            <div class="text-subtitle2 text-grey-7 text-center">{{ auth.user.email }}</div>
            </div>
          
        </q-card-section>
      
    </q-card>
  
</q-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/AuthStore';

export default defineComponent({
    setup(){
        const auth = useAuthStore()
        auth.getUser()

        return {
            auth
        }
     }
})

</script>


<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width : 250px
}

</style>