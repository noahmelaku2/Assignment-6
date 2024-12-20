<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "../store";

const store = useStore();
const firstName = ref(store.firstName);
const lastName = ref(store.lastName);
const email = ref(store.email);

const router = useRouter();

function handleSave() {
  store.firstName = firstName.value;
  store.lastName = lastName.value;

  alert("Your changes have been saved!");
  router.push("/movies");
}

function goBackToMovies() {
  router.push("/movies");
}
</script>

<template>
  <div class="Notflix-theme">
    <div class="settings-view">
      <h1>User Settings</h1>
      <form @submit.prevent="handleSave">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input v-model="firstName" id="firstName" type="text" placeholder="Enter first name" class="input-field" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input v-model="lastName" id="lastName" type="text" placeholder="Enter last name" class="input-field" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input :value="email" id="email" type="email" class="input-field" disabled />
        </div>
        <button type="submit" class="button save">Save Changes</button>
        <button type="button" class="button back" @click="goBackToMovies">Back to Movie List</button>
      </form>
    </div>
  </div>
</template>
