<style lang="css">
  @import "../../css/style.css";
</style>

<template v:onload="fetchData">
    <div class="container">
        <div class="header clearfix">
            <h3 class="text-muted">Bookmarker</h3>
        </div>

        <div class="jumbotron">
            <h2>Bookmark Your Favorite Sites</h2>
            <form @submit.prevent="validateBeforeSubmit">
                <div class="form-group">
                    <label>Site Name</label>
                    <input name="name" v-model="book.siteName" type="text" placeholder="Website Name" class="form-control"
                        v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('book.siteName') }">
                    <p v-show="errors.has('name')" style="color: red" >{{ errors.first('name') }}</p>

                </div>
                <div class="form-group">
                    <label>Site URL</label>
                    <input name="url" v-model="book.siteUrl" type="url" placeholder="Website URL" class="form-control"
                        v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('book.siteUrl') }">
                    <p v-show="errors.has('url')" style="color: red" >{{ errors.first('url') }}</p>
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="well" v-for="b in books" :key="b.key">
            <h3> {{ b.siteName}}
                <a class="btn btn-default" target="_blank" v-bind:href="b.siteUrl">Visit</a>
                <a class="btn btn-danger" @click="deleteData(b.key)">Delete </a>
            </h3>
        </div>

      <footer class="footer">
        <p>&copy; 2016 Bookmarker, Inc.</p>
      </footer>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: 'BookMarker',
        data() {
            return {
                book: {
                    siteName: '',
                    siteUrl: ''
                },
                books: [],
                user: '',
            }
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.submit();
                    }
                });
            },
            submit() {
                this.$http.post('https://vue-resource-tutorial-8aa47.firebaseio.com/users/' + this.user.uid + '/books.json', this.book)
                .then(response => {         
                    console.log(response);
                    this.fetchData();
                    this.book.siteName = ''
                    this.book.siteUrl = ''
                }, error => {               
                    console.log(error);
                });
            },
            fetchData() {
                this.$http.get('https://vue-resource-tutorial-8aa47.firebaseio.com/users/' + this.user.uid + '/books.json')
                .then(response => {
                    return response.json();           
                })
                .then(data => {        
                    // console.log(data)             
                    const resultArray = [];
                    for (let key in data) {
                        var temp = new Object()
                        temp['key'] = key
                        temp['siteName'] = data[key].siteName
                        temp['siteUrl'] = data[key].siteUrl
                        resultArray.push(temp)
                    }
                    this.books = resultArray;        
                });     
            },
            deleteData(key){
                this.$http.delete('https://vue-resource-tutorial-8aa47.firebaseio.com/users/' + this.user.uid + '/books/' + key + '.json')
                .then(response => {
                    this.fetchData();
                    console.log(response);           
                },error => {               
                    console.log(error);
                })  
            }
        },
        created() {
            var user = firebase.auth().currentUser
            this.user = user
            this.fetchData();
        }
    }
</script>

<style scoped>
    p {
        margin-top: 20px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }

</style>