<template>
  <div class="row q-mt-md q-px-xl">
    <div class="text-h4 text-grey-7">Products</div>
  </div>
  <div class="q-mt-xl q-pa-md">
    <q-table
      title="Treats"
      :rows="productStore.getProducts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-avatar rounded>
              <img :src="props.row.image" />
            </q-avatar>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <!-- {{ col.value }} -->
            {{ col.name ==='description' ? shrinkDescription(col.value,20) : col.value }}

          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              This is expand slot for row above: {{ props.row.name }}.
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "../../stores/ProductStore";

const columns = [
  {
    name: "title",
    required: true,
    label: "Title",
    align: "left",
    field: (row: { title: any }) => row.title,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: "price",
    align: "center",
    label: "Price",
    field: (row: { price: any }) => row.price,
    sortable: true,
  },
  {
    name: "category",
    label: "Catergory",
    sortable: true,
    field: (row: { category: any }) => row.category,
  },
  {
    name: "description",
    label: "Description",
    align: "center",
    field: (row: { description: any }) =>   row.description,
  },
  {
    name: "rating",
    label: "Rating",
    field: (row: { rating: any }) => row.rating.rate,
  },
];

export default defineComponent({
  setup() {
    const productStore = useProductStore();
    productStore.fetchProducts();

    // trim description text

    function shrinkDescription(str: { length: number; slice: (arg0: number, arg1: number) => string; },n: number ){

        return (str.length > n) ? str.slice(0, n -1) + "..." : str
    }

    return {
      columns,
      productStore,
      shrinkDescription
    };
  },
});
</script>
