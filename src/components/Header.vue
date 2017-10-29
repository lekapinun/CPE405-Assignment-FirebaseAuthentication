<template>
    <div>
        <nav class="navbar">
        <ul class="nav nav-pills navbar-right" style="margin-right:5Px" >
            <li role="presentation"><router-link to="/hello">Profile</router-link></li>
            <li role="presentation"><router-link to="/">Bookmarks</router-link></li>
            <li role="presentation"><router-link to="/">About</router-link></li>
            <li role="presentation"><a @click="logout">Sign Out</a></li>
        </ul>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Header',
    methods: {
        logout() {
            firebase.auth().signOut().then( () => {
                this.$router.push( { name: 'Login'});
            })
        }
    },
}
</script>
