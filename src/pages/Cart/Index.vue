<template>
 <div class="row q-mt-md q-px-xl ">
        <div class="text-h4 text-grey-7">Cart Items</div>  
    </div>
    <div class="q-mt-xl q-pa-md">
        <q-table 
            :rows="rows"
            row-key="name"
            />    </div>
    </template>


<script lang="ts">
import { defineComponent } from 'vue';

const rows =[
{
        name:"Fish",
        price:"400",
        description:"hello word",
        orderId:"30300303",
        quantity:"30",
        status:"pending"

    },
    {
        name:"Fish",
        price:"400",
        description:"hello word",
        orderId:"30300303",
        quantity:"30",
        status:"pending"

    },{
        name:"Fish",
        price:"400",
        description:"hello word",
        orderId:"30300303",
        quantity:"30",
        status:"pending"

    },
]
export default defineComponent({
    setup(){
        return{
            rows
        }

    }
})
</script>