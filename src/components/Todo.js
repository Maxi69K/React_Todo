import React from "react";

const Todo = () => {
    return (
      <div className="col-4">
        <div className="card text-center">
          <div className="card-header">
            <h4>Todo: 1</h4>
          </div>
          <div className="card-body">
            <h3>Learn React</h3>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-danger">Delete</button>
            <button className="btn btn-warning">Mark</button>
          </div>
        </div>
      </div>
    )
}

export default Todo;