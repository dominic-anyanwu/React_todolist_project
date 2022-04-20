import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props
    return (
        <ul className="list-group my-5">
          <h3 className='text-capitalize text-center'>Todo List</h3>

          {items.map(item => {
            return <TodoItem key = {item.id} title = {item.item} 
                      handleDelete = {()=>handleDelete(item.id)}
                      handleEdit = {()=>handleEdit(item.id)}
                  />
          })}
          
          <button type='submit' className="btn btn-sm btn-block btn-danger mt-5" onClick={clearList}>
            Clear List
          </button>
        </ul>

    )
  }
}
