import React from 'react';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';

class App extends React.Component{
  state = {
    todos: [
      {id: 1, content: 'read a book'},
      {id:2, content: 'play fifa'}
    ] 
  }

  deleteItem = (id) => {
   const todos = this.state.todos.filter(todo => {
     return todo.id !== id
   });
   this.setState({
     todos
   })
  }
  createItem = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

render(){
  return (
    <div className="App">
     <Header createItem={this.createItem}/>
     <Items todos={this.state.todos} deleteItem = {this.deleteItem}/>
    </div>
  );
}
}

export default App;
