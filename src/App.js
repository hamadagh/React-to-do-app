import React from 'react';
import './App.css';
import Header from './components/Header';
import Items from './components/Items';

class App extends React.Component{
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
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
  createItem (){
    const itemValue = document.getElementById('user-input').nodeValue;
  }

render(){
  return (
    <div className="App">
     <Header />
     <Items todos={this.state.todos} deleteItem = {this.deleteItem}/>
    </div>
  );
}
}

export default App;
