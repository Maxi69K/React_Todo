import React, { Component } from "react";

class NewTodo extends Component {
    state = {
        msg: '',
        done: false
    }

    setNewMsg = e => {
        this.setState({
            msg: e.target.value
        })
    }

    addTodo = () => {
        this.props.addIntoTodos(this.state)
        this.setState({msg: ''})
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row m-5 justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="new msg" onChange={this.setNewMsg} value={this.state.msg} />
                            <div className="input-group-append">
                                <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTodo;