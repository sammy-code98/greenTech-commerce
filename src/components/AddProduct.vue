<template>
          <q-btn color="primary" outline label="Add New Product" @click="alert = true"/>
          <q-dialog v-model="alert" persistent>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Add New Product</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-form class="q-gutter-md" @submit.prevent="addProduct">
                <q-input
            outlined
            v-model="title"
            class="text-font text-subtitle1"
            type="text"
            placeholder="Enter Product Title"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="price"
            class="text-font text-subtitle1"
            type="text"
            placeholder="Enter Product Price"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="desc"
            class="text-font text-subtitle1"
            type="text"
            placeholder="Enter Product Description"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="image"
            class="text-font text-subtitle1"
            type="text"
            placeholder="Enter Product Image Url"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            outlined
            v-model="cat"
            class="text-font text-subtitle1"
            type="text"
            placeholder="Enter Product Catergory"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-btn flat label="Add Product" type="submit" color="primary" v-close-popup />
            </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

 


</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';
import { useProductStore } from '../stores/ProductStore';
export default defineComponent({
    setup(){
        const title = ref("")
        const price = ref("")
        const desc = ref("")
        const image = ref("")
        const cat = ref("")
        const productStore = useProductStore()
        
        // add product
     function addProduct(){
        productStore.addProduct({
            title:title.value,
            description:desc.value,
            image:image.value,
            catergory:cat.value,
            price:price.value
        })
     }

        return {
            alert:ref(false),
            title,
            price,
            desc,
            image,
            cat,
            productStore,
            addProduct
        }
    }
})

</script>

<style scoped>
.my-card{
    width: 500px;
    padding: 2rem;
}
</style>