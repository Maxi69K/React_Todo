import React from "react";
import Todo from "./Todo";

const TodoList = () => {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-wrap">
          <Todo />
        </div>
      </div>
    )
}

export default TodoList;