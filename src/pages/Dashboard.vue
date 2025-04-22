<template>
  <div class="row" v-if="dashboardData">
    <!-- Purchase, Sale, Sale Paid, Expense Cards -->
    <div class="col-xl-3 col-sm-6 col-12 d-flex" v-for="card in cards" :key="card.title">
      <div class="dash-widget w-100" :class="card.widgetClass">
        <div class="dash-widgetimg">
          <span>
            <img :src="card.img" alt="icon" />
          </span>
        </div>
        <div class="dash-widgetcontent">
          <h5>${{ card.value }}</h5>
          <h6>{{ card.title }}</h6>
        </div>
      </div>
    </div>

    <!-- Customers, Suppliers, Purchase No, Sale No Counts -->
    <div class="col-xl-3 col-sm-6 col-12 d-flex" v-for="count in counts" :key="count.title">
      <div class="dash-count" :class="count.widgetClass">
        <div class="dash-counts">
          <h4>{{ count.value }}</h4>
          <h5>{{ count.title }}</h5>
        </div>
        <div class="dash-imgs">
          <i :class="count.iconClass"></i>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    Loading...
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/Api"; // তোমার axios instance

const dashboardData = ref(null);
const cards = ref([]);
const counts = ref([]);

const fetchDashboardData = () => {
  api.get("/dashboardData")
    .then(response => {
      console.log(response);

      dashboardData.value = response.data;

      cards.value = [
        {
          title: "Total Purchase",
          value: response.data.total_purchases,
          img: "https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash1.svg",
          widgetClass: "",
        },
        {
          title: "Total Sale",
          value: response.data.total_orders,
          img: "https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash2.svg",
          widgetClass: "dash1",
        },
        {
          title: "Total Sale Paid",
          value: response.data.total_orders_paid,
          img: "https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash3.svg",
          widgetClass: "dash2",
        },
        {
          title: "Total Expense Amount",
          value: response.data.total_purchases_paid,
          img: "https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/dash4.svg",
          widgetClass: "dash3",
        },
      ];

      counts.value = [
        {
          title: "Customers",
          value: response.data.total_customers,
          iconClass: "fas fa-user",
          widgetClass: "",
        },
        {
          title: "Suppliers",
          value: response.data.total_suppliers,
          iconClass: "fas fa-user-check",
          widgetClass: "das1",
        },
        {
          title: "Purchase",
          value: response.data.total_purchases_no,
          iconClass: "fas fa-file-alt",
          widgetClass: "das2",
        },
        {
          title: "Sales",
          value: response.data.total_orders_no,
          iconClass: "fas fa-file",
          widgetClass: "das3",
        },
      ];
    })
    .catch(error => {
      console.error("Failed to fetch dashboard data", error);
    });
};

onMounted(() => {
  fetchDashboardData();
});

</script>

<style scoped>
/* চাইলে এখানে feather icons এর CSS adjust করতে পারো */
</style>
