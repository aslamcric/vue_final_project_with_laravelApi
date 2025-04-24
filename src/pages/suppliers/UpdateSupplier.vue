<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">Update Supplier</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateSupplier" enctype="multipart/form-data">
            <div class="app-form">
              <!-- Name -->
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="supplierData.name" type="text" class="form-control" id="name" placeholder="Enter supplier name" />
              </div>

              <!-- Photo -->
              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input @change="onFileChange" type="file" class="form-control" id="photo" />

                <!-- Preview the selected image -->
                <div v-if="photoPreview" class="mt-2">
                  <img :src="photoPreview" alt="Selected Photo" width="100" />
                </div>

                <!-- Show current photo if no new file is selected -->
                <div v-else-if="supplierData.photo" class="mt-2">
                  <img :src="`${imgUrl}/${supplierData.photo}`" alt="Current Photo" width="80" />
                </div>
              </div>

              <!-- Phone -->
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="supplierData.phone" type="text" class="form-control" id="phone" placeholder="Enter phone number" />
              </div>

              <!-- Email -->
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="supplierData.email" type="email" class="form-control" id="email" placeholder="Enter email" />
              </div>

              <!-- Address -->
              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input v-model="supplierData.address" type="text" class="form-control" id="address" placeholder="Enter address" />
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
const router = useRouter();

const photoPreview = ref(null);
const imgUrl = import.meta.env.VITE_IMG_BASE_URL;

onMounted(() => {
  fetchSupplierDetails();
});

// Supplier Data
const supplierData = reactive({
  id: "",
  name: "",
  photo: "",
  phone: "",
  email: "",
  address: "",
});

// Fetch Supplier Details
const fetchSupplierDetails = () => {
  api.get(`/suppliers/${id}`)
    .then((result) => {
      const supplier = result.data.supplier;
      supplierData.id = supplier.id;
      supplierData.name = supplier.name;
      supplierData.phone = supplier.phone;
      supplierData.email = supplier.email;
      supplierData.address = supplier.address;
      supplierData.photo = supplier.photo;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Handle file input change
const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    supplierData.photo = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

// Update Supplier
const updateSupplier = () => {
  const formData = new FormData();
  formData.append('_method', 'PUT');

  // Append supplier data
  for (const key in supplierData) {
    if (key === "photo") {
      // Only append if it's a new file
      if (supplierData.photo instanceof File) {
        formData.append("photo", supplierData.photo);
      }
    } else {
      formData.append(key, supplierData[key]);
    }
  }

  api.post(`/suppliers/${supplierData.id}`, formData)
    .then(() => {
      // router.push({ path: "/suppliers" });
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
