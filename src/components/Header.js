import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="App mx-auto mb-5">
             <div className="mx-auto input-group mt-5" style={{width: 400}}>
             <input type="text" placeholder="To do" className="form-control" id="user-input"></input>
             <div className="input-group-append">
               <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
             </div>
             </div>
            </div>
        )
    }
}

export default Header
