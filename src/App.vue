<template>
  <div id="app">
    <Navbar v-on:books-data="setBooksData" />
    <router-view :books="books" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      books: []
    };
  },
  methods: {
    setBooksData(books) {
      this.books = books;
      console.log(this.books);
    }
  }
};
</script>
<style lang="scss"></style>
