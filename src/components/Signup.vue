<template>
    <div class="sign-up">
        <form @submit.prevent="validateBeforeSubmit">
            <p>Let's create a new account!</p>

            <div>
                <input name="name" v-model="user.name"  type="name" placeholder="Full Name"
                    v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('user.name') }">
                <p v-show="errors.has('name')" style="color: red" >{{ errors.first('name') }}</p>
            </div>

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
                <input name="confirm password" v-model="user.password2" type="password" placeholder="Confirm Password"
                    v-validate="'required|confirmed:password'" :class="{'input': true, 'is-danger': errors.has('user.password2') }">
                <p v-show="errors.has('confirm password')" style="color: red" >{{ errors.first('confirm password') }}</p>
            </div>

            <div>
                <input name="birthdate" v-model="user.birthdate" type="date" placeholder="Birth day (DD/MM/YYYY)"
                    v-validate="'required|date_format:DD/MM/YYYY'" :class="{'input': true, 'is-danger': errors.has('user.birthdate') }">
                <p v-show="errors.has('birthdate')" style="color: red" >{{ errors.first('birthdate') }}</p>
            </div>

            <div>
                <input name="url" v-model="user.url" type="text" placeholder="Facebook"
                    v-validate="'required|url|regex:.*(facebook).*'" :class="{'input': true, 'is-danger': errors.has('user.url') }">
                <p v-show="errors.has('url')" style="color: red" >{{ errors.first('url') }}</p>
            </div>

            <div>
                <input name="phone" v-model="user.phone" type="text" placeholder="Phone"
                    v-validate="'required|regex:^([0-9]+)$'" :class="{'input': true, 'is-danger': errors.has('user.phone') }">
                <p v-show="errors.has('phone')" style="color: red" >{{ errors.first('phone') }}</p>
            </div>

            <div>
                <button style="margin-bottom: 20px">Sign Up</button> 
            </div>
            
        </form>
    </div >
</template>

<script>
import firebase from 'firebase';
import { db } from '@/firebaseConfig'

var md5 = require('md5');
let usersRef = db.ref('users');

export default {
  name: 'signUp',
  data() {
      return {
          user: {
              name: '',
              email: '',
              password1: '',
              password2: '',
              url: '',
              phone: '',
              birthdate: ''
          }
      }
  },
  methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.signup();
                }
            });
        },
        signup() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then( 
                user => {
                    alert('Your accound has been created!');

                    /* add user info to database */
                    var newUser = this.addUserInfo();

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
        },
        addUserInfo() {
            var newUser = {
                name: this.user.name,
                email: this.user.email,
                url: this.user.url,
                phone: this.user.phone,
                birthdate: this.user.birthdate
            }

            var uid = md5(this.user.email);
            console.log(uid);
            db.ref('users/'+ uid).set(newUser);

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


