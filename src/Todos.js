import React from "react";

import Todo from "./Todo";
import * as TodoActions from "./actions/TodoActions";
import TodoStore from "./stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      text:""
    };
     this.addingInput = this.addingInput.bind(this); 
     this.submitInput = this.submitInput.bind(this); 
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }
addingInput(e) {  
  this.setState({text:e.target.value});
  
  } 
 submitInput(){
   TodoActions.createTodo(this.state.text);
 }
  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });
    
    return (
      <div>
        <h2>Programming Lanuages</h2>
        <ul>{TodoComponents}</ul>
         <input  
          type="text"  
          onChange={this.addingInput}/>  
        <input  
          type="button"  
          value="Add Languages"  
          onClick={this.submitInput}  
        />
      </div>
    );
  }
}
