import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.todos = [{
      text: "Eat",
      completed: false
    }];

    this.state = {
      nextTodo: '',
      list : this.todos
    }
  }

  toggleState(text) {
    let todo = this.todos.find(x => x.text === text);
    todo.completed = !todo.completed;
  }

  addTodo(event) {
    this.todos.push({
      text: this.state.nextTodo,
      completed: false
    });
    
    this.setState({
      nextTodo: ''
    });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      nextTodo: event.target.value
    });
  }

  removeCompleted(){
    this.todos = this.todos.filter(x => !x.completed);

    this.setState({
      list: this.todos
    });
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todo</h2>
        </div>

        <form>
          <input value={this.state.nextTodo} onChange={this.handleChange.bind(this)}/>
          <button onClick={this.addTodo.bind(this)} disabled={!this.state.nextTodo}>Add</button>
        </form>
        
        <ul className="App-todos">
          {
            this.state.list.map((x, i) => {
              return <li key={i.toString()} onChange={this.toggleState.bind(this, x.text)}>
                <input type="checkbox" value={x.completed}></input>
                {x.text}
              </li>
            })
          }
        </ul>

        <button onClick={this.removeCompleted.bind(this)}>Remove Completed</button>
        
      </div>
    );
  }
}

export default App;
