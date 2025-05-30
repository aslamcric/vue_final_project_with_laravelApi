<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">Update Customer</h5>
        </div>

        <div class="card-body">
          <form @submit.prevent="submitData" enctype="multipart/form-data">
            <div class="app-form">
              <div class="mb-3">
                <label for="username" class="form-label">Name</label>
                <input v-model="customerData.name" type="text" class="form-control" placeholder="Enter Name"
                  id="username" />
              </div>

              <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
                <input @change="onFileChange" type="file" class="form-control" id="photo" />

                <!-- New image preview -->
                <div v-if="photoPreview" class="mt-2">
                  <img :src="photoPreview" alt="Selected Photo" width="100" />
                </div>

                <!-- Existing image preview -->
                <div v-else-if="customerData.photo" class="mt-2">
                  <img :src="`${imgUrl}/${customerData.photo}`" alt="Current Photo" width="80" />
                </div>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="customerData.email" type="email" class="form-control" placeholder="Enter Email"
                  id="email" />
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input v-model="customerData.phone" type="text" class="form-control" placeholder="Enter Phone Number"
                  id="phone" />
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <textarea v-model="customerData.address" class="form-control" id="address" rows="3"
                  placeholder="Enter Address"></textarea>
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
import api from '@/Api';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { id } = useRoute().params;
const router = useRouter();

const imgUrl = import.meta.env.VITE_IMG_BASE_URL;
const photoPreview = ref(null);

const customerData = reactive({
  id: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  photo: ""
});

onMounted(() => {
  fetchCustomer();
});

const fetchCustomer = () => {
  api.get(`/customers/${id}`)
    .then((result) => {
      const customer = result.data.customer;
      customerData.id = customer.id;
      customerData.name = customer.name;
      customerData.phone = customer.phone;
      customerData.email = customer.email;
      customerData.address = customer.address;
      customerData.photo = customer.photo;
    })
    .catch((err) => {
      console.log(err);
    });
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    customerData.photo = file;
    photoPreview.value = URL.createObjectURL(file);
  }
};

const submitData = () => {
  const formData = new FormData();
  formData.append('_method', 'PUT');

  for (const key in customerData) {
    if (key === "photo") {
      if (customerData.photo instanceof File) {
        formData.append("photo", customerData.photo);
      }
    } else {
      formData.append(key, customerData[key]);
    }
  }

  api.post(`/customers/${customerData.id}`, formData)
    .then(() => {
      router.push('/customers');
    })
    .catch((err) => {
      console.log("Update error", err.response?.data || err);
    });
};
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
