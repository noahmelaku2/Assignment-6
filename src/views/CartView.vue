<script setup>
import { useStore } from '../store';
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

const store = useStore();
</script>

<template>
  <Header />
  <div class="cart">
    <h1>Shopping Cart</h1>
      <div class="item" v-for="([key, value]) in store.cart">
        <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" />
        <h1>{{ value.title }}</h1>
        <button @click="store.removeFromCart(key)">Remove</button>
      </div>
  </div>
  <Footer />
</template>

<style scoped>
.cart {
  padding: 20px;
  color: white;
  background-color: #000;
}

.movie-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.movie-image {
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}

.movie-info {
  flex: 1;
}

.remove-button {
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #b20710;
}
</style>
