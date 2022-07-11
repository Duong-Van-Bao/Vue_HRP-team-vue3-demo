<template>
  <!-- <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div v-else-if="error">{{ error.message }}}</div>
  <div v-else>Loading transctions...</div> -->
  <h1>Testing...</h1>
</template>

<script>// @ts-nocheck

// import useTransactions from "../uses/fetchTransaction" //hàm gọi API
import { useStore } from "vuex"
export default {
  setup() {
    
    // const {transactions, error, fetchAll} = useTransactions(); // lấy ra các hàm nhỏ để sử dụng
    const store = useStore();

    // store.dispatch()

    console.log(store);
    // fetchAll(); // goi API
    return{
      //  transactions, 
      //  error
    };
  },
};
</script>
