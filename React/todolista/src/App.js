import React,{ Component } from 'react'
import TodoList from './componente/todolist'


export default class App extends Component{
	render(){
		return(
				<div>
					<h1>Lista de Tarefas</h1>
					<TodoList />

				</div>
				
			)
	}
}