<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h3 class="mb-0">Manage Suppliers</h3>
          <RouterLink to="/suppliers/create" class="btn btn-dark">Add New Suppliers</RouterLink>
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
                <tr v-for="supplier in suppliers">
                  <td>{{ supplier.id }}</td>
                  <td>{{ supplier.name }}</td>
                  <td>{{ supplier.photo }}</td>
                  <td>{{ supplier.phone }}</td>
                  <td>{{ supplier.email }}</td>
                  <td>{{ supplier.address }}</td>
                  <td class="text-center btn btn-group">
                    <RouterLink :to="`/suppliers/show/${supplier.id}`" class="btn btn-sm btn-primary me-2">
                      <i class="fas fa-eye"></i>
                    </RouterLink>
                    <RouterLink :to="`/suppliers/edit/${supplier.id}`" class="btn btn-sm btn-primary me-2">
                      <i class="fas fa-edit"></i>
                    </RouterLink>
                    <a class="btn btn-sm btn-danger" @click="deleteSupplier(supplier.id)">
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
import { onMounted, ref } from 'vue';

const suppliers = ref([])
onMounted(() => {
  fetchSuppliers();
})

const fetchSuppliers = () => {
  api.get("/suppliers")
    .then(res => {
      console.log(res.data.suppliers);
      suppliers.value = res.data.suppliers
    })
    .catch(err => {
      console.log(err);

    })
}


const deleteSupplier = (id) => {
  api.delete(`/suppliers/${id}`)
    .then(res => {
      console.log(res);
      if (res.data.suppliers) {
        fetchSuppliers()
      }
    })
    .catch(err => {
      console.log(err);

    })
}

</script>

<style scoped></style>