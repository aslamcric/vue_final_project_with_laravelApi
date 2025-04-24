<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3 class="mb-0">Create Supplier</h3>
        </div>

        <div class="card-body">
          <form @submit.prevent="createSupplier">
            <div class="app-form">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="supplierData.name" type="text" class="form-control" id="name"
                  placeholder="Enter supplier name" />
              </div>

              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input @change="onFileChange" type="file" class="form-control" id="photo" />
              </div>

              <!-- ✅ Preview Image -->
              <div v-if="photoPreview" class="mb-3">
                <img :src="photoPreview" alt="Photo Preview" style="max-width: 80px; max-height: 80px;" />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="supplierData.phone" type="text" class="form-control" id="phone"
                  placeholder="Enter phone number" />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="supplierData.email" type="email" class="form-control" id="email"
                  placeholder="Enter email address" />
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea v-model="supplierData.address" class="form-control" id="address" rows="3"
                  placeholder="Enter address"></textarea>
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const photoPreview = ref(null); // ✅ for preview

const supplierData = reactive({
  name: "",
  photo: "",
  phone: "",
  email: "",
  address: "",
});

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    supplierData.photo = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

const createSupplier = () => {
  const formData = new FormData();
  for (const key in supplierData) {
    formData.append(key, supplierData[key]);
  }

  api.post("/suppliers", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((result) => {
      console.log(result);
      router.push({ path: "/suppliers" });
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
