<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h3 class="mb-0">Manage Suppliers</h3>
          <RouterLink to="/suppliers/create" class="btn btn-dark">Add New Supplier</RouterLink>
        </div>

        <div class="card-body">
          <!-- Search Box -->
          <div class="mb-3">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search by Supplier Name"
              @input="fetchSuppliers"
            />
          </div>

          <!-- Supplier Table -->
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
              <tr v-for="supplier in suppliers" :key="supplier.id">
                <td>{{ supplier.id }}</td>
                <td>{{ supplier.name }}</td>
                <td>{{ supplier.photo }}</td>
                <td>{{ supplier.phone }}</td>
                <td>{{ supplier.email }}</td>
                <td>{{ supplier.address }}</td>
                <td class="text-center">
                  <RouterLink :to="`/suppliers/edit/${supplier.id}`" class="btn btn-sm btn-primary me-2">Edit</RouterLink>
                  <a class="btn btn-sm btn-danger" @click="deleteSupplier(supplier.id)">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Pagination Controls -->
          <div v-if="pagination.total_pages > 1" class="d-flex justify-content-between">
            <button
              :disabled="pagination.current_page === 1"
              class="btn btn-secondary"
              @click="changePage(pagination.current_page - 1)"
            >
              Previous
            </button>
            <span>Page {{ pagination.current_page }} of {{ pagination.total_pages }}</span>
            <button
              :disabled="pagination.current_page === pagination.total_pages"
              class="btn btn-secondary"
              @click="changePage(pagination.current_page + 1)"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from '@/Api';
import { onMounted, ref, watch } from 'vue';

const suppliers = ref([]);
const pagination = ref({
  current_page: 1,
  total_pages: 1,
  total_items: 0,
});
const searchQuery = ref('');

// Fetch suppliers with pagination and search functionality
const fetchSuppliers = () => {
  api.get("/suppliers", { params: { search: searchQuery.value, page: pagination.value.current_page } })
    .then(res => {
      suppliers.value = res.data.suppliers;
      pagination.value = res.data.pagination;
    })
    .catch(err => {
      console.log(err);
    });
};

// Delete a supplier
const deleteSupplier = (id) => {
  api.delete(`/suppliers/${id}`)
    .then(res => {
      if (res.data.suppliers) {
        fetchSuppliers(); // Re-fetch suppliers after deletion
      }
    })
    .catch(err => {
      console.log(err);
    });
};

// Handle page change
const changePage = (page) => {
  if (page >= 1 && page <= pagination.value.total_pages) {
    pagination.value.current_page = page;
    fetchSuppliers();
  }
};

// Watch for changes in search query to trigger fetch
watch(searchQuery, fetchSuppliers);

// Fetch suppliers when the component mounts
onMounted(() => {
  fetchSuppliers();
});
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
