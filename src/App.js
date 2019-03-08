import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, item: 'Play Badminton' },
      {id: 2, item: 'Evaluate Assignments' }
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    let todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  addTodo = (item) => {
    console.log(item);
    item.id = Math.random();

    let todos = [...this.state.todos, item]  //it create completely new array wih same id
    this.setState({
      todos:todos
    })
  }
  
  
  componentDidMount(){
      console.log('Component Mounted');
  }

componentDidUpdate(prevProps,prevState){
    console.log('component updated');
    console.log(prevProps,prevState);
}
  render() {
    return (
      <div className="App container">
      <h3 className="center purple-text">MY TODO'S</h3>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
//=> does auto-binding for the context that is it is a kind of function having different syntax
//if we want to invoke function in 17 line then write {this.handleChange()}
//we can write deleteTodo as function deleteTodo(id){} but then we have to write in render function as deleteTodo={this.deleteTodo.bind(this)}