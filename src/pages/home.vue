<template>
  <h1>Overview page is here</h1>
  <!-- <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilter" :key="index">
      {{ customer }}
    </li>
  </ul>
  <p>{{ transactions}}</p> -->
</template>

<script>
// import { computed, ref, reactive, watch, watchEffect } from "vue";
// import useTransactions from "../uses/fetchTransaction" //tách riêng phần gọi API ra
export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    console.log(this.$store);
    // this.count = this.$store.state.count;
  }
  // props: {
  //   theme: {
  //     type: String,
  //     required: false,
  //     default: "light",
  //   },
  // },
  // setup(props, { emit }) { // khai báo đúng vị trí nếu không dùng params thêm _ và props thay thế { tên props} nhưng làm theo cách này thì không dùng được reactive
  //   const { transactions, fetchAll } = useTransactions() //lấy các các hàm gọi data
     
  //   fetchAll(); //gọi data 

  //   console.log(props.theme);
  //   console.log(emit);  
  //   const searchText = ref(""); // ref được dùng ở nhưng kiểu dữ liệu thường boolean,String,number và thay đổi data
  //   // ref thay đôi giá trị cả object thông qua hàm get và set

  //   const customers = reactive([
  //     //reactive được dùng để thay đổi dữ liệu phức tạp(object) và được định nghĩa.Tương tự ref
  //     "Something", // reative không thay đổi cả object nhưng thay đổi được các key thông qua hàm get set
  //     "tran Toan",
  //     "Sky Albert",
  //     "Hula",
  //   ]);

  //   const customersFilter = computed(() =>
  //     // computed bản chất dùng để tính toán trả ra giá trị và theo dõi biến thay đổi thì function tính toán này chạy
  //     customers
  //       .map((customer) => {
  //         customer = customer.toLowerCase();
  //         return customer;
  //       })
  //       .filter((customer) => customer.includes(searchText.value.toLowerCase()))
  //   );

  //   watch(searchText, (newValue, oldValue) => console.log(newValue, oldValue)); //dùng để theo dõi biến và chay hàm callback khi biến đó theo dõi

  //   watchEffect(() => {
  //     // watchEffect giống với computed nhưng không trả ra giá trị
  //     if (searchText.value) {
  //       // thực hiện công việ khi thấy sự thay đổi
  //       console.log("reun again");
  //     }
  //   });
    
  //   return {
  //     searchText,
  //     customersFilter,
  //     transactions
  //   };
  // },
};
</script>
