<template>
    <article class="post">
        <header class="post-header">
            <section class="post-author">
                <img class="profile-icon" alt="Profile Icon" src="@/assets/avatar.jpg">
                <span class="post-author-name">{{ postData.author }}</span>
            </section>
            <span class="post-date">{{ postData.date }}</span>
        </header>
        <article class="post-body">
            <section class="post-attachment" :style="!postData.image && 'display: none;'">
                <img :src="postData.image" alt="Attached Image">
            </section>
            <p class="post-text">{{ postData.text }}</p>
        </article>
        <footer class="post-footer">
            <button @click="() => likePost(postData.id)" class="like-button">
                <img src="@/assets/like.png" alt="Like">
            </button>
            <span class="like-count">{{ postData.likeCount }} Likes</span>
        </footer>
    </article>
</template>

<script>
export default {
    name: 'Post',
    props: {
        postData: {
            id: Number,
            date: String,
            text: String,
            image: String | null,
            author: String,
            likeCount: Number
        }
    },
    methods: {
        likePost(id)    { this.$store.dispatch("LikePostAct", id); },
        unlikePost(id)  { this.$store.dispatch("UnlikePostAct", id) },
    }
}
</script>

<style scoped>
.post {
    width: 100%;
    max-width: 800px;
    border-radius: 5px;
    background-color: lightgray;
    padding: 1em;
    margin: 1em;
    margin-top: 2em;
}

.post:first-child {
    margin-top: 0;
}

.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
}

.post-author {
    display: flex;
    align-items: center;
}

.post-author-name {
    margin-left: 10px;
    font-weight: bold;
    font-size: x-large;
}

.post-date {
    font-weight: bold;
    font-size: large;
}

.post-body {
    display: flex;
    align-content: center;
    flex-direction: column;
}

.post-attachment {
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
}

.post-attachment img {
    max-width: 100%;
    object-fit: contain;
}

.post-text {
    text-align: left;
}

.post-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.post-footer img {
    width: 2em;
    height: 2em;
}

.profile-icon {
    width: 3em;
    height: 3em;
    border-radius: 50%;
}

.like-count {
    margin-left: 0.5em;
    font-size: large;
    font-weight: bold;
}

.like-button {
    all: unset;
    cursor: pointer;
}
</style>