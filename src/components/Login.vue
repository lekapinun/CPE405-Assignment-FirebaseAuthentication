<template>
  <!-- <div class="login">
      <h3>Sign in</h3>
      <input type="text" v-model="user.username" placeholder="Username"><br>
      <input type="password" v-model="user.password" placeholder="Password"><br>
      <button @click="login">Login</button>
      <p>You don't have an account? You can <router-link to="/signup"> create one</router-link><br>
        Or... You can login with Google, Facebook or another account </p>
      <div id="firebaseui-auth-container"></div>
      <hr> -->
      
      <!-- <p>Sign-in with <span @click="loginGoogle">Google</span> or <span @click="loginFacebook">Facebook</span> account.</p>
      <p>Sign-in with Firebase UI <router-link to='/firebaseauth'>click here</router-link></p> -->

  <!-- </div> -->
    <div class="login">
        <form @submit.prevent="validateBeforeSubmit">
            <h3>Sign in</h3>

            <div>
                <input name="email" v-model="user.email" type="email" placeholder="Email"
                    v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('user.email') }">
                <p v-show="errors.has('email')" style="color: red" >{{ errors.first('email') }}</p>
            </div>

            <div>
                <input name="password" v-model="user.password1" type="password" placeholder="Password"
                    v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('user.password1') }">
                <p v-show="errors.has('password')" style="color: red" >{{ errors.first('password') }}</p>
            </div>
            
            <div>
                <button style="margin-bottom: 20px">Log in</button> 
            </div>

            <p>You don't have an account? You can <router-link to="/signup"> create one</router-link><br>
                Or... You can login with Google, Facebook or another account </p>
            <div id="firebaseui-auth-container"></div>
            <hr>
        </form>
    </div >
  
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'

export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }

        }
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.login();
                }
            });
        },
        login() {
            firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then(
                user => {
                    alert('User authentication successful');
                    this.$router.push({name: 'Hello'});
                },
                err => {
                    if (err.code === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else if (err.code === 'auth/user-not-found') {
                        alert('User not found!');
                    } else if (err.code === 'auth/invalid-email') {
                        alert('Invalid email');
                    } else {
                        alert('Oops. ' + err.message);
                    }
                    
                }
            ).catch (error => {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(error.message);
                }
            })
        },
        loginGoogle() {
            console.log("Google login");
            // Using a popup.
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            firebase.auth().signInWithPopup(provider).then(
                result => {
                    if (result) {
                        // This gives you a Google Access Token.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;

                        console.log('token: ' + token);
                        console.log(user);

                        this.$router.push('/hello');
                    }
                    
                },
                err => {
                    alert('Oops. ' + err.message);
                }
            );
        },
        loginFacebook() {
            console.log("Facebook login");
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('public_profile');
            provider.setCustomParameters({
                'display': 'popup'
            });
            
            firebase.auth().signInWithPopup(provider).then(
                result => {
                    if (result) {
                        // This gives you a Google Access Token.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;

                        console.log('token: ' + token);
                        console.log(user);

                        this.$router.push('/hello');
                    }
                    
                },
                err => {
                    alert('Oops. ' + err.message);
                }
            );        
        }
    },
    mounted() {
        var uiConfig = {
        signInSuccessUrl: '/hello',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style scoped>
    .login {
        margin-top: 10px;
    }
    input {
        margin: 10px 0;
        width: 40%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
        margin-top: 20px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }

</style>

<style src="firebaseui/dist/firebaseui.css" />

</style>