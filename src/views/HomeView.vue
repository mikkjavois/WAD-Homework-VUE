<template>
  <div class="home">
    <Post 
      v-for="post in posts" 
      :key="post.id" 
      :postData="post" 
    />
  </div>
  <Footer></Footer>
</template>

<script>
import Post from '@/components/Post.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Post,
    Footer
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