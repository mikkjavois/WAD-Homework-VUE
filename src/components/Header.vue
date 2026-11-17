<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/signup">Sign Up</router-link>
        </nav>
    </header>
</template>

<style scoped>
nav {
    padding: 30px;
    background-color: darkcyan;
    color: white;
}

nav a {
    font-weight: bold;
    color: white;
}

nav a.router-link-exact-active {
    color: greenyellow;
}
</style>