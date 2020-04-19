<template>
  <div class="home">
    <div class="container">
      <div v-if="books !== null" class="row mt-2">
        <Book
          v-for="book in books"
          :key="book.id"
          :id="book.id"
          :book="book.volumeInfo"
        />
      </div>
      <div v-if="books.length === 0">
        <h2 class="text-center" style="margin-top: 250px">
          Search Book By Title, Author and Publishing house
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import Book from "@/components/Book.vue";

export default {
  name: "Home",
  components: { Book },
  props: ["books"],
  data() {
    return {
      searching: true
    };
  }
};
</script>

<style scoped></style>
