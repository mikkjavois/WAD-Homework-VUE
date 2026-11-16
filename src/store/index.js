import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    GetPosts:   state => state.posts,
  },
  mutations: {
    SetPosts:   (state, posts) => state.posts = posts,
    LikePost:   (state, id) => state.posts.find(p => p.id === id).likeCount++,
    UnlikePost: (state, id) => {
      const post = state.posts.find(p => p.id === id);
      if (post.likeCount >= 0) {
        post.likeCount--;
      }
    },
    ResetLikes: state => state.posts.forEach(p => p.likeCount = 0),
  },
  actions: {
    async FetchPosts(act) {
      try {
        const res = await fetch("/posts.json");
        const json = await res.json();
        act.commit("SetPosts", json);
      } catch (err) {
        console.log(err.message);
      }
    },
    LikePostAct:    (act, id) => setTimeout(() => act.commit("LikePost", id), 200),
    UnlikePostAct:  (act, id) => setTimeout(() => act.commit("UnlikePost", id), 200),
  },
  modules: {
  }
})
