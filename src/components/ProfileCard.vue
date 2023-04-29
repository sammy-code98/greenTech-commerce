<template>
<q-menu auto-close fit  :offset="[-10, 10]">
        <q-card class="my-card q-px-xl q-py-sm row justify-center">
        <q-card-section>
            <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <div class="q-mt-lg">
                <div class="text-h6 text-grey-7 font-bold">Username</div>
                <div class="text-h6 text-center text-grey-7 ">role</div>
            <div class="text-subtitle2 text-grey-7 text-center">email</div>
            </div>
          
        </q-card-section>
      
    </q-card>
  
</q-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup(){ }
})

</script>


<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width : 250px
}

</style>