import React, { Component } from 'react'
import firebase from 'firebase'


export default class App extends Component{

    constructor(props) {
        super(props)
        this.state = {
            nomeInput: '',
            idadeInput: '',
            tokenInput: '',
            token: 'Carregando....',
            nome: '',
            idade: ''
        };
        this.cadastrar = this.cadastrar.bind(this)

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
        firebase.analytics();

        /*
        firebase.database().ref('token').on('value', (snapshot) => {
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state)
        })*/

        firebase.database().ref('token').on('value',(snapshot) => {
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state)
        })

        firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            state.idade = snapshot.val().idade;
            this.setState(state)
        })
    }

    cadastrar(e) {
        //inserinto um token
        //firebase.database().ref('token').set(this.state.tokenInput)

        //alterando o token
        //firebase.database().ref('token').set(this.state.tokenInput)


        //alterar a idade do usuario 1
        //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput)


        //criar uma cargo
        //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)

        //remove o cargo
        //firebase.database().ref('usuarios').child(1).child('cargo').remove()

        let usuarios = firebase.database().ref('usuarios')
        let chave = usuarios.push().key
        usuarios.child(chave).set({
            nome: this.state.nomeInput,
            idade: this.state.idadeInput
        })

        e.preventDefault();
    }

    render() {
        const { token, nome, idade } = this.state;
        return (
            <div>

                <form onSubmit={this.cadastrar}>
                    <input type="text" value={this.state.nomeInput}
                        onChange={(e) => this.setState({ nomeInput: e.target.value })} /><br/>
                    <input type="text" value={this.state.idadeInput}
                        onChange={(e) => this.setState({ idadeInput: e.target.value })} /><br/>
                    <button type='submit'>Cadastrar</button>
                </form>

                <h1>Token: {token}</h1>
                <h1>Nome: {nome}</h1>
                <h1>Idade: {idade}</h1>
            </div>
        )
    }
}