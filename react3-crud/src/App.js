import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        // {id: 1, title: 'first todo'}
        {id:1, title: 'first todo'},
        {id:2, title: 'second todo'}
      ]
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index)=> {
      // return <li>{item.title}</li>
      return (
        <li>
          <TodoItem todo = {item} />
        </li>
      )
    })

    return (
      <div className="App">
        <h1>my todos</h1>
        <div>
          {/* <input type="text" value={title.state.newTodo}/> */}
          <TodoInput content={this.state.newTodo} />
        </div>
      </div>
      <ol>
        {todos}
      </ol>
    )
  }
}

export default App;
