<template>
    <div class="row q-mt-md q-px-xl ">
        <div class="text-h4 text-grey-7">Products</div>
       
    </div>
    <div class="q-mt-xl q-pa-md">
            <q-table 
            :rows="rows"
            row-key="name"
            />
        </div>
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
const rows =[
    {
        name:"Fish",
        price:"400",
        description:"hello word",
        createdAt:"23/40/33"

    },
    {
        name:"Fish",
        price:"400",
        description:"hello word",
        createdAt:"23/40/33"

    }, {
        name:"Fish",
        price:"400",
        description:"hello word",
        createdAt:"23/40/33"

    }, {
        name:"Fish",
        price:"400",
        description:"hello word",
        createdAt:"23/40/33"

    },

    
]
export default defineComponent({
    setup(){
        return {
            rows
        }
    }
})
</script>