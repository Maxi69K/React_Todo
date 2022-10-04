import React from "react";
import styles from "../css/Todo.module.css";

const Todo = ({ todo, index, markTodo, deleteTodo }) => {
  return (
    <div className={styles.oneCard}>
      <div className="card text-center m-1">
        <div className="card-header">
          <h4>Todo: {index + 1}</h4>
        </div>
        <div className="card-body">
          <h3 className={todo.done ? styles.complete : styles.incomplete}>
            {todo.msg}
          </h3>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button onClick={() => deleteTodo(index)} className="btn btn-danger">
            Delete
          </button>
          <button onClick={() => markTodo(index)} className="btn btn-warning">
            Mark
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo;