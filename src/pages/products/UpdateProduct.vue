<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">Update Product</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateProduct" enctype="multipart/form-data">
            <div class="app-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="productData.name" type="text" class="form-control" id="name"
                  placeholder="Enter product name" />
              </div>

              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input @change="onFileChange" type="file" class="form-control" id="photo" />

                <!-- Preview the selected image -->
                <div v-if="photoPreview" class="mt-2">
                  <img :src="photoPreview" alt="Selected Photo" width="100" />
                </div>

                <!-- Show current photo if no new file is selected -->
                <div v-else-if="productData.photo" class="mt-2">
                  <img :src="`${imgUrl}/${productData.photo}`" alt="Current Photo" width="80" />
                </div>
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input v-model="productData.price" type="number" class="form-control" id="price"
                  placeholder="Enter price" />
              </div>

              <div class="mb-3">
                <label for="offer_price" class="form-label">Offer Price</label>
                <input v-model="productData.offer_price" type="number" class="form-control" id="offer_price"
                  placeholder="Enter offer price" />
              </div>

              <div class="mb-3">
                <label for="category_id" class="form-label">Category</label>
                <select v-model="productData.category_id" class="form-control" id="category_id">
                  <option value="">Select Category</option>
                  <option v-for="category in categories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="barcode" class="form-label">Barcode</label>
                <input v-model="productData.barcode" type="text" class="form-control" id="barcode"
                  placeholder="Enter barcode" />
              </div>

              <div class="mb-3">
                <label for="sku" class="form-label">SKU</label>
                <input v-model="productData.sku" type="text" class="form-control" id="sku" placeholder="Enter SKU" />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea v-model="productData.description" class="form-control" id="description" rows="3"
                  placeholder="Enter product description"></textarea>
              </div>

              <div class="mb-3">
                <label for="weight" class="form-label">Weight</label>
                <input v-model="productData.weight" type="text" class="form-control" id="weight"
                  placeholder="Enter weight" />
              </div>

              <div class="mb-3">
                <label for="size" class="form-label">Size</label>
                <input v-model="productData.size" type="text" class="form-control" id="size" placeholder="Enter size" />
              </div>

              <div>
                <button type="submit" class="btn btn-primary">Update</button>
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
import { useRoute, useRouter } from "vue-router";

const { id } = useRoute().params;
const categories = ref([]);
const router = useRouter();

const photoPreview = ref(null);
const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

onMounted(() => {
  fetchCategories();
  fetchProductDetails();
});

// Fetch Categories
const fetchCategories = () => {
  api.get("/dropCategory")
    .then((result) => {
      categories.value = result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const productData = reactive({
  id: "",
  name: "",
  photo: "",
  price: "",
  offer_price: "",
  category_id: "",
  barcode: "",
  sku: "",
  description: "",
  weight: "",
  size: "",
});

// Fetch Product Details
const fetchProductDetails = () => {
  api.get(`/products/${id}`)
    .then((result) => {
      const product = result.data.product;
      productData.id = product.id;
      productData.name = product.name;
      productData.price = product.price;
      productData.offer_price = product.offer_price;
      productData.category_id = product.category_id;
      productData.barcode = product.barcode;
      productData.sku = product.sku;
      productData.description = product.description;
      productData.weight = product.weight;
      productData.size = product.size;
      productData.photo = product.photo;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Handle file input change
const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    productData.photo = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

const updateProduct = () => {
  const formData = new FormData();
  formData.append('_method', 'PUT');

  // Normal append
  // for (const key in productData) {
  //   formData.append(key, productData[key]);
  // }

  // if (productData.photo) {
  //   formData.append('photo', productData.photo);
  // }

  // Append with photo
  for (const key in productData) {

    if (key === "photo") {
      // only append if it's a File (i.e., newly selected)
      if (productData.photo instanceof File) {
        formData.append("photo", productData.photo);
      }
    } else {
      formData.append(key, productData[key]);
    }
  }

  api.post(`/products/${productData.id}`, formData)
    .then(() => {
      router.push({ path: "/products" });
    })
    .catch((err) => {
      console.log(err.response?.data || err);
    });
};
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
