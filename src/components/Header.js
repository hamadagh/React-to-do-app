import React, { Component } from 'react'

export class Header extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createItem(this.state);
        this.setState({
            content: ''
        })

    }
    render() {
        return (
            <div className="App mx-auto mb-5">
             <form className="mx-auto input-group mt-5" style={{width: 400}} onSubmit={this.handleSubmit}>
             <input type="text" 
             placeholder="To do" 
             className="form-control" 
             id="user-input"
             onChange={this.handleChange}
             value={this.state.content}
             ></input>
             <div className="input-group-append">
               <button className="btn btn-outline-secondary" 
               type="button" 
               id="button-addon2" 
               onClick={this.handleSubmit}
               >Add</button>
             </div>
             </form>
            </div>
        )
    }
}

export default Header
