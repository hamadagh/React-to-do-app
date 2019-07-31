import React from 'react'

const Items = ({todos, deleteItem}) => {

    const todoList = todos.length ? (
        todos.map( todo => {
            return (
                <div className="list-group-item text-center container" key={todo.id}>
                   <span onClick={() => {deleteItem(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="text-center"> No todo's left</p>
    )
    return (
        <div className="list-group">{todoList}</div>
    )
}

export default Items
