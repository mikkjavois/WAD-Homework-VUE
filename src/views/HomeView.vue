<template>
  <div class="home">
    <Post 
      v-for="post in posts" 
      :key="post.id" 
      :postData="post" 
    />
    <button class="reset-button" @click="resetLikes">Reset Likes</button>
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
  },
  methods: {
  resetLikes() {
    this.$store.commit("ResetLikes");
  }
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

.reset-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
}

.reset-button:hover {
  background-color: #0056b3;
}
</style>