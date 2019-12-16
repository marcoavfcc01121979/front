import React,{ Component } from 'react'

import TodoItems from './todoitems'

export default class TodoList extends Component{

	constructor(props){
		super(props)
		this.state = {
			tarefa: '',
			items: []
		}
		this.addItem = this.addItem.bind(this)
		this.log = this.log.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
	}

	addItem(e){
		let state = this.state;
		if (this._tarefaInput.value !== '') {
			let newItem = {
				text: this._tarefaInput.value,
				key: Date.now()
			}
			this.setState({ items: [...state.items, newItem] })
		}
		e.preventDefault()
		this.setState({ tarefa: '' })
	}

	log(){
		//testando se os item estao vindo no formato de array
		console.log(this.state.items)
	}

	deleteItem(key){
		//console.log('item a ser deletado' + key)
		let filtro = this.state.items.filter((item) => {
			return(item.key !== key)
		})
		this.setState({items: filtro})
	}

	render(){
		return(
				<div>
					<form onSubmit={this.addItem}>
						<input type='text' placeholder='Nova Tarefa?' name='tarefa' 
							value={this.state.tarefa} onChange={(e) => this.setState({tarefa: e.target.value})} 
							ref={(e) => this._tarefaInput = e } />
						<button type="submit">Adicionar</button>	
					</form>	


					<button onClick={this.log}>LOG</button>


					<br/>
					<TodoItems lista={this.state.items} delete={this.deleteItem}/>	
				</div>
				
			)
	}
}