<template>
  <div class="sign-up-validate">
      <form @submit.prevent="validateBeforeSubmit">
        <p>Let's create a new account!</p>
        
        <div class="form-group" :class="{'has-error': errors.has('user.name') }">
        <input type="text" ref="name" v-model="user.name" v-validate.initial="user.name" data-rules="required|alpha|min:5" placeholder="Full Name"><br>
        <p class="text-danger" v-if="errors.has('user.name')">{{ errors.first('user.name') }}</p>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('user.email') }">
        <input type="email" ref="email" v-model="user.email" v-validate.initial="user.email" data-rules="required|email" placeholder="Email"><br>
        <p class="text-danger" v-if="errors.has('user.email')">{{ errors.first('user.email') }}</p>
        </div>

        <input type="password" v-model="user.password1" placeholder="Password"><br>
        
        <input type="password" ref="password2" v-model="user.password2" placeholder="Confirm password"><br>
        
        <div class="form-group" :class="{'has-error': errors.has('user.website') }">
        <input type="text" ref="url" v-model="user.website" v-validate.initial="user.website" data-rules="required|url" placeholder="Website"><br>
        <p class="text-danger" v-if="errors.has('user.website')">{{ errors.first('user.website') }}</p>
        </div>

        <input type="text" v-model="user.phone" placeholder="Phone number"><br>

        <button  @click="signup">Sign Up</button>
      </form>
      <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

VeeValidate.Validator.extend('passphrase', {
    getMessage: field => 'Sorry dude, wrong pass phrase.',
    validate: value => value.toUpperCase() == 'Demogorgon'.toUpperCase()
});

export default {
  name: 'signUpValidate',
  data() {
      return {
          user: {
              name: '',
              email: '',
              password1: '',
              password2: '',
              website: '',
              phone: '',
          }
      }
  },
  methods: {
      validateBeforeSubmit() {
          this.$validator.validateAll();
          if (!this.error.any()) {
              this.signup();
          }
      },
      signup() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then( 
                user => {
                    alert('Your accound has been created!');
                    this.$router.push({ name: 'Hello'});
                }, 
                error => {
                    var errorCode = error.code;
                    var errorMsg = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too week');
                    } else {
                        alert('Oops.' + errorMsg);
                    }
                }
            );
        }
    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 5px 0;
        width: 40%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }

</style>

