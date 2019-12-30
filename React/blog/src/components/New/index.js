import React, {Component} from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase'
import './new.css'

class New extends Component{

    constructor(props) {
        super(props)
            this.state = {
                titulo: '',
                imagem: null,
                url: '',
                descricao: '',
                alert: ''
            }
        this.cadastrar = this.cadastrar.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    componentDidMount() {
        if (!firebase.getCurrent()) {
            this.props.history.replace('/')
            return null
        }
    }

    cadastrar = async(e) => {
        e.preventDefault()

        if (this.state.titulo !== '' && this.state.imagem !== '' && this.state.descricao !== '') {
            let posts = firebase.app.ref('posts')
            let chave = posts.push().key
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.imagem,
                descricao: this.state.descricao,
                autor: localStorage.nome
            })
            this.props.history.push('/dashboard')
        } else {
            this.setState({alert: 'Preencha todos os campos.'})
        }
    }

    handleFile = async (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0]
            console.log(image)

            if (image.type === 'image/png' || image.type === 'image.jpeg') {
                await this.setState({ imagem: image })
                this.handleUpload()
            } else {
                alert('Envie uma imagem do tipo PNG ou JPG')
                this.setState({ imagem: null })
                return null
            }
        }
    }

    handleUpload = async () => {
        const { imagem } = this.state
        const currentUid = firebase.getCurrentUid()

        const uploadTaks = firebase.storage
            .ref(`images/${currentUid}/${imagem.nome}`)
            .put(imagem);

        await uploadTaks.on('state_changed',
            (snapshot) => {
                //progress
            },
            (error) => {
                //error
                console.log('Error imagem: ' + error)
            },
            () => {
                //sucesso
                firebase.storage.ref(`images/${currentUid}`)
                    .child(imagem.nome).getDownloadURL()
                    .then(url => {
                        this.setState({url: url})
                    })
            })
    }

    render(){
        return(
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <form id="new-post" onSubmit={this.cadastrar}>

                <span>{this.state.alert}</span>

                <input type="file"
                    onChange={this.handleFile} /><br />


                
                <label>Titulo:</label><br />
                <input type="text" placeholder="Nome do post" value={this.state.titulo} autoFocus
                    onChange={(e) => this.setState({ titulo: e.target.value })} /><br/>

                <label>Descri��o:</label><br />
                <textarea type="text" placeholder="Alguma descri��o........." value={this.state.descricao} autoFocus
                        onChange={(e) => this.setState({ descricao: e.target.value })} /><br />

                <button type="submit">Cadastrar</button>   
                </form>
            </div>
        )
    }
}
export default withRouter(New)