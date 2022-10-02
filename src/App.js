import React, { Component } from "react";
import Row from "./components/Row";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

class App extends Component {
    render(){
        return(
            <div className="container-sm">
                <Row />
                <NewTodo />
                <TodoList />
            </div>
        )
    }
}

export default App;