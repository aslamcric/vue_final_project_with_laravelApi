<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h3 class="mb-0">Manage Customers</h3>
          <RouterLink to="/customers/create" class="btn btn-dark">Add New Customers</RouterLink>
        </div>

        <div class="card-body">
          <div>
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th class="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers">
                  <td>{{ customer.id }}</td>
                  <td>{{ customer.name }}</td>
                  <td>{{ customer.photo }}</td>
                  <td>{{ customer.phone }}</td>
                  <td>{{ customer.email }}</td>
                  <td>{{ customer.address }}</td>
                  <td class="text-center btn btn-group">
                    <RouterLink :to="`/customers/show/${customer.id}`" class="btn btn-sm btn-primary me-2">
                      <i class="fas fa-eye"></i>
                    </RouterLink>

                    <RouterLink :to="`/customers/edit/${customer.id}`" class="btn btn-sm btn-primary me-2">
                      <i class="fas fa-edit"></i>
                    </RouterLink>

                    <a class="btn btn-sm btn-danger" @click="deleteCustomer(customer.id)">
                      <i class="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import api from '@/Api';
import { onMounted, ref } from 'vue'

const customers = ref([])

onMounted(() => {
  fetchCustomers();
})

const fetchCustomers = () => {
  api.get("/customers")
    .then(res => {
      console.log(res.data.customers);
      customers.value = res.data.customers

    })
    .catch(err => {
      console.log(err);

    })
}

const deleteCustomer = (id) => {
  api.delete(`/customers/${id}`)
    .then(res => {
      console.log(res);
      if (res.data.customers) {
        fetchCustomers()
      }
    })
    .catch(err => {
      console.log(err);

    })
}



</script>




<style scoped></style>