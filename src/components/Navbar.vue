<template>
  <nav class="navbar navbar-light bg-success">
    <a class="navbar-brand" href="/">
      <span class="font-weight-light">Google</span>
      <span class="font-weight-bold">Books</span>
    </a>
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
      <a
        class="text-white btn btn-outline-light my-2 my-sm-0"
        @click="searchBooks"
        >Search</a
      >
    </form>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      books: [],
      search: ""
    };
  },
  methods: {
    async searchBooks(e) {
      e.preventDefault;
      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.search}`,
          config
        );

        this.books = res.data.items;
        this.$emit("books-data", this.books);
        console.log(this.books);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
