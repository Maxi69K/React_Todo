import React, { Component } from "react";
import Row from "./components/Row";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: []
  }

  // Mount
  componentDidMount() {
    let db_todo = []
    if (localStorage.db_todo) {
      db_todo = JSON.parse(localStorage.db_todo)
    }
    this.setState({
      todos: db_todo,
    })
  };

  // Update
  componentDidUpdate() {
    localStorage.db_todo = JSON.stringify([...this.state.todos])
  };

  addIntoTodos = (todo) => {
    todo.id = Math.floor(Math.random()*(10000 - 10)-10)
    this.setState({todos: [...this.state.todos,todo]})
  }

  markTodo = (index) => {
    const copyTodos = [...this.state.todos]
    copyTodos[index].done = !copyTodos[index].done
    this.setState({ todos: copyTodos })
  }

  deleteTodo = (index) => {
    const copyTodos = [...this.state.todos]
    copyTodos.splice(index,1)
    this.setState({ todos: copyTodos })
  }

  render() {
    return (
      <div className="container-sm">
        <Row />
        <NewTodo addIntoTodos={this.addIntoTodos} />
        <TodoList
          todos={this.state.todos}
          markTodo={this.markTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;