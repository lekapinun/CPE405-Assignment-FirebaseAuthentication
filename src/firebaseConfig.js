import Firebase from 'firebase'

/* Firebase configuration */
let config = {
    apiKey: "AIzaSyCAD1FK8dyvXSIpiE8V71dakbxCXfyNkMY",
    authDomain: "vue-resource-tutorial-8aa47.firebaseapp.com",
    databaseURL: "https://vue-resource-tutorial-8aa47.firebaseio.com/",
    projectId: "vue-resource-tutorial-8aa47",
    storageBucket: "vue-resource-tutorial-8aa47.appspot.com",
    messagingSenderId: "880920997027"
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export {firebaseApp, db};