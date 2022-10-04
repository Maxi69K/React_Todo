import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, markTodo, deleteTodo }) => {
  const allTodos = todos.map((todo, index) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        index={index}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
      />
    )
  })

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap justify-content-center">{allTodos}</div>
    </div>
  )
}

export default TodoList;