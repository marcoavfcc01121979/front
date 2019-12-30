import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyBEp5dk_yqEok5GFwop1ZX1V46FszbIfQc",
    authDomain: "reactapp-b4e64.firebaseapp.com",
    databaseURL: "https://reactapp-b4e64.firebaseio.com",
    projectId: "reactapp-b4e64",
    storageBucket: "reactapp-b4e64.appspot.com",
    messagingSenderId: "1096895946301",
    appId: "1:1096895946301:web:738d91893b8f95140d9454",
    measurementId: "G-MRM3FF6ZS1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase