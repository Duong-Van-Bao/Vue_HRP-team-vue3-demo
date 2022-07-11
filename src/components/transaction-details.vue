<template>
  <div>
    <h1>Transactions detail pages is here...</h1>
    <template v-if="transaction">
      <h1>Id: {{ $route.params.id }}</h1>
      <h3>Name: {{ transaction.name }}</h3>
      <p>Price: {{ transaction.price }}</p>
    </template>
    <template v-else>
      <div>
          Loading transaction {{$route.params.id}}...
      </div> 
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>

