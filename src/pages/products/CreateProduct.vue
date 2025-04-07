<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">Create Product</h3>
        </div>

        <div class="card-body">
          <form @submit.prevent="createProduct">
            <div class="app-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  v-model="productData.name"
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter product name"
                />
              </div>

              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input
                  @change="onFileChange"
                  type="file"
                  class="form-control"
                  id="photo"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input
                  v-model="productData.price"
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Enter price"
                />
              </div>

              <div class="mb-3">
                <label for="offer_price" class="form-label">Offer Price</label>
                <input
                  v-model="productData.offer_price"
                  type="number"
                  class="form-control"
                  id="offer_price"
                  placeholder="Enter offer price"
                />
              </div>

              <div class="mb-3">
                <label for="category_id" class="form-label">Category</label>
                <select
                  v-model="productData.category_id"
                  class="form-control"
                  id="category_id"
                >
                  <option value="">Select Category</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="barcode" class="form-label">Barcode</label>
                <input
                  v-model="productData.barcode"
                  type="text"
                  class="form-control"
                  id="barcode"
                  placeholder="Enter barcode"
                />
              </div>

              <div class="mb-3">
                <label for="sku" class="form-label">SKU</label>
                <input
                  v-model="productData.sku"
                  type="text"
                  class="form-control"
                  id="sku"
                  placeholder="Enter SKU"
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  v-model="productData.description"
                  class="form-control"
                  id="description"
                  rows="3"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div class="mb-3">
                <label for="weight" class="form-label">Weight</label>
                <input
                  v-model="productData.weight"
                  type="text"
                  class="form-control"
                  id="weight"
                  placeholder="Enter weight"
                />
              </div>

              <div class="mb-3">
                <label for="size" class="form-label">Size</label>
                <input
                  v-model="productData.size"
                  type="text"
                  class="form-control"
                  id="size"
                  placeholder="Enter size"
                />
              </div>

              <div>
                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import api from "@/Api";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const categories = ref([]);

onMounted(() => {
  fetchCategories();
});

const fetchCategories = () => {
  api
    .get("/categories")
    .then((result) => {
      categories.value = result.data.categories;
    })
    .catch((err) => {
      console.log(err);
    });
};

const productData = reactive({
  name: "",
  photo: "",
  price: "",
  offer_price: "",
  category_id: "1",
  barcode: "",
  sku: "",
  description: "",
  weight: "",
  size: "",
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    productData.photo = file;
  }
};

const createProduct = () => {
  const formData = new FormData();
  for (const key in productData) {
    formData.append(key, productData[key]);
  }

  api
    .post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((result) => {
      console.log(result);
      // router.push({ path: "/products" });
    })
    .catch((err) => {
      console.log(err.response?.data || err);
    });
};
</script>

<style></style>
