import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import 'normalize.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todoList: [
        // {id: 1, title: 'first todo'}

      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index)=> {
      // return <li>{item.title}</li>
      return (
        <li key={index}>
          <TodoItem todo = {item} onToggle = {this.toggle.bind(this)}
            onDelete = {this.delete.bind(this)}/>
        </li>

      )
    })


    return (
      <div className="App">
        <h1>my todos</h1>
        <div>
          {/* <input type="text" value={title.state.newTodo}/> */}
          <TodoInput content={this.state.newTodo}
            onChange = {this.changeTitle.bind(this)}
            onSubmit = {this.addTodo.bind(this)} />
        </div>
      <ol>
        {todos}
      </ol>
      </div>
    )
  }


  toggle(e, todo) {
    todo.status = todo.status === 'cpmpleted' ? '' : 'completed'
    this.setState(this.state)
  }


  changeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  addTodo(event) {
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }

  delete(event, todo) {
    todo.deleted = true
    this.setState(this.state)
  }
}




export default App;

let id = 0

function idMaker(){
  id += 1
  return id
}