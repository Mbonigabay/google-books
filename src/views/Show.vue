<template>
  <div class="about">
    <div class="card mt-4 flex-md-row mb-4 shadow-sm h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <h3 class="mb-0">
          <a class="text-dark" href="#"
            >{{ book.title }} by <span>{{ book.authors[0] }}</span></a
          >
        </h3>
        <div class="mb-1 text-muted">
          Published by {{ book.publisher }} on {{ book.publishedDate }}
        </div>
        <p>
          Pages:<span class="badge">{{ book.pageCount }}</span>
        </p>
        <p>
          Language:<span class="badge">{{ book.language }}</span>
        </p>
        <p>
          Category:<span class="badge">{{ book.categories[0] }}</span>
        </p>
        <p class="card-text mb-auto">
          {{ book.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      book: {}
    };
  },
  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`,
        config
      );

      this.book = res.data.volumeInfo;
      console.log(this.book);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style scoped></style>
