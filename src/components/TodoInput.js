import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem, emptyInput} = this.props
    return (
      <div className='card card-body mt-3'>
        <form onSubmit = {handleSubmit}>
            <div className='input-group'>
              
                <div className='input-group-text bg-primary text-white'>
                  <i className='fa fa-book'/>
                </div>
              
              <input type="text" className='form-control text-capitalize'
                placeholder={emptyInput?'Please add an item!!'
                                       :'What do you want to do?'
                            }
                value = {item}
                onChange = {handleChange}
              />
            </div>
            <div className="list-group">
              <button type='submit' 
                      className={editItem ? "btn btn-sm btn-block btn-success mt-3"
                                  :"btn btn-sm btn-block btn-primary mt-3"
                                }
              >
                  {editItem ? 'Edit Item' : 'Add Item'}
              </button>
            </div>
          </form>
      </div>
    )
  }
}
