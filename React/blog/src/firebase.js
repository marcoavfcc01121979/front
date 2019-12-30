import app from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBEp5dk_yqEok5GFwop1ZX1V46FszbIfQc",
    authDomain: "reactapp-b4e64.firebaseapp.com",
    databaseURL: "https://reactapp-b4e64.firebaseio.com",
    projectId: "reactapp-b4e64",
    storageBucket: "reactapp-b4e64.appspot.com",
    messagingSenderId: "1096895946301",
    appId: "1:1096895946301:web:738d91893b8f95140d9454",
    //measurementId: "G-MRM3FF6ZS1"
};
// Initialize Firebase


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        //Referenciando a database para acessar em outros locais
        this.app = app.database()

        this.storage = app.storage()
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password)
    }

    logout() {
        return app.auth().signOut();
    }

    async register(nome, email, password) {
        await app.auth().createUserWithEmailAndPassword(email, password)

        const uid = app.auth().currentUser.uid

        return app.database().ref('usuarios').child(uid).set({
            nome: nome
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve)
        })
    }

    getCurrent() {
        return app.auth().currentUser && app.auth().currentUser.email
    }

    getCurrentUid() {
        return app.auth().currentUser && app.auth().currentUser.uid
    }

    getUserName(callback) {
        if (!app.auth().currentUser) {
            return null
        }

        const uid = app.auth().currentUser.uid
        app.database().ref('usuarios').child(uid)
            .once('value').then(callback)
    }
}
export default new Firebase()