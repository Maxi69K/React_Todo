import React, { Component } from "react";

class NewTodo extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row m-5 justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="new msg" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTodo;