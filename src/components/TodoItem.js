import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fa fa-pencil"></i>
          </span>
          <span className="mx-2 text-danger">
            <i className="fa fa-trash text-danger" onClick={handleDelete}></i>
          </span>
        </div>
      </li>
      
    )
  }
}
