<template>
  <div class="home">
    <Post 
      v-for="post in posts" 
      :key="post.id" 
      :postData="post" 
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'HomeView',
  components: {
    Post
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch("FetchPosts");
  }
}
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
}
</style>