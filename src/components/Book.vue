<template>
  <div class="col-md-6">
    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-success">
          {{ book.categories[0] }}
        </strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">{{ book.title }}</a>
        </h3>
        <div class="mb-1 text-muted">
          <span>Published By:</span>
          {{ book.publisher }}
        </div>
        <p class="card-text mb-auto">
          {{ book.description | truncate(70, "...") }}
        </p>
        <router-link class="btn btn-sm btn-outline btn-success" :to="'/' + id"
          >More</router-link
        >
      </div>
      <img
        class="card-img-right flex-auto d-none d-lg-block"
        data-src="holder.js/200x250?theme=thumb"
        alt="Thumbnail [200x250]"
        :src="book.imageLinks.thumbnail"
        data-holder-rendered="true"
        style="width: 250px; height: 250px;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  props: ["book", "id"]
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
