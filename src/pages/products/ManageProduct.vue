<template>
  <div class="row">
    <div class="col">
      <div class="card">
        <!-- Header -->
        <div
          class="card-header bg-primary text-white d-flex justify-content-between align-items-center flex-wrap gap-2"
        >
          <h3 class="mb-0">Manage Products</h3>

          <!-- Search bar -->
          <form class="d-flex align-items-center" @submit.prevent>
            <div class="input-group">
              <input
                v-model="search"
                @input="fetchProducts"
                type="text"
                class="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
              <span class="input-group-text bg-white border-start-0">
                <i class="ti ti-search text-dark"></i>
              </span>
            </div>
          </form>

          <!-- Add product button -->
          <RouterLink to="/products/create" class="btn btn-dark">
            Add New Product
          </RouterLink>
        </div>

        <!-- Table -->
        <div class="card-body table-responsive">
          <table class="table table-striped table-bordered">
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Price</th>
                <th>Offer Price</th>
                <th>Category</th>
                <th>Barcode</th>
                <th>SKU</th>
                <th>Description</th>
                <th>Weight</th>
                <th>Size</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Show message when no data -->
              <tr v-if="products.data && products.data.length === 0">
                <td colspan="12" class="text-center text-danger">
                  <h3>No data found!</h3>
                </td>
              </tr>

              <!-- Loop through products -->
              <tr v-for="product in products.data" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>
                  <img
                    :src="`${imgUrl}/${product.photo}`"
                    alt="Product Photo"
                    width="80"
                    height="80"
                    class="img-thumbnail"
                  />
                </td>
                <td>{{ product.price }}</td>
                <td>{{ product.offer_price }}</td>
                <td>{{ product.category_id }}</td>
                <td>{{ product.barcode }}</td>
                <td>{{ product.sku }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.weight }}</td>
                <td>{{ product.size }}</td>
                <td class="text-center">
                  <RouterLink
                    :to="`/products/edit/${product.id}`"
                    class="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </RouterLink>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteProduct(product.id)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="card-footer d-flex justify-content-end">
          <nav>
            <ul class="pagination mb-0">
              <li
                v-for="page in products.links"
                :key="page.label"
                class="page-item"
                :class="{ active: page.active, disabled: !page.url }"
              >
                <button
                  class="page-link"
                  :disabled="!page.url"
                  @click="page.url && fetchProducts(page.url)"
                >
                  {{ formatPageLabel(page.label) }}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/Api";
import { onMounted, reactive, ref } from "vue";

const products = ref([]);
const categories = ref([]);
const search = ref("");

onMounted(() => {
  fetchProducts();
  // fetchCategories()
});

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

// fetchProducts
const fetchProducts = (url = "/products") => {
  if (typeof url !== "string") {
    console.log(url);
    url = "/products";
  }
  api
    .get(url, { params: { search: search.value } })
    .then((result) => {
      console.log(result.data);
      products.value = result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};



// const debouncedFetchUsers = debounce(fetchUsers, 300);
const formatPageLabel = (label) => {
  if (label === "&laquo; Previous") return "Previous";
  if (label === "Next &raquo;") return "Next";
  return label;
};



const deleteProduct = (id) => {
  api
    .delete(`/products/${id}`)
    .then((res) => {
      console.log(res);
      if (res.data.products) {
        fetchProducts();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped></style>
