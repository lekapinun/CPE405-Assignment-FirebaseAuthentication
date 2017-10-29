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
            <form>
            <div class="form-group">
                <label>Site Name</label>
                <input type="text" class="form-control" placeholder="Website Name" v-model="book.siteName">
            </div>
            <div class="form-group">
                <label>Site URL</label>
                <input type="text" class="form-control" placeholder="Website URL" v-model="book.siteUrl">
            </div>
            <div class="btn btn-primary" @click="submit">Submit</div>
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
    export default {
        data() {
            return {
                book: {
                    // key: '',
                    siteName: '',
                    siteUrl: ''
                },
                books: []
            }
        },
        methods: {
            submit() {
                this.$http.post('https://vue-resource-tutorial-8aa47.firebaseio.com/books.json', this.book)
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
                this.$http.get('https://vue-resource-tutorial-8aa47.firebaseio.com/books.json')
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
                this.$http.delete('https://vue-resource-tutorial-8aa47.firebaseio.com/books/' + key + '.json')
                .then(response => {
                    this.fetchData();
                    console.log(response);           
                },error => {               
                    console.log(error);
                })  
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>
