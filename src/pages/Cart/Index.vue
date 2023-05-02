<template>
  <div class="row q-mt-md q-px-xl">
    <div class="text-h4 text-grey-7">Cart Items</div>
  </div>
  <div class="q-mt-xl q-pa-md">
    <div v-for="product in productStore.cart.products" class="q-pa-md">
      <q-card>
        <q-card-section class="flex row items-center justify-between">
          <div class="text-subtitle1 text-medium">ProductId : {{ product.productId }}</div>
          <div class="text-subtitle1 text-medium">Product Quantity: {{ product.quantity }}</div>
           <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat round color="red" icon="delete" @click="productStore.deleteCartProduct" />
        </q-card-actions>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "../../stores/ProductStore";


export default defineComponent({
  setup() {
    const productStore = useProductStore();
    productStore.getCartProducts();

    return {
      productStore,
    };
  },
});
</script>
