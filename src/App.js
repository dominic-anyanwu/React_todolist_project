import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default class App extends Component {
  state = {
    items : [],
    id : 0,
    item : "",
    editItem : false,
    index : null,
    emptyInput : false 
  }


handleChange = e=>{
  this.setState({
    item : e.target.value
  })
}

clearList = ()=>{
  this.setState({
    items : [],
    id : 0,
    
  })
}

handleSubmit = e=>{

  e.preventDefault();

  
  const checkIndex = this.state.index;
  const checkInput = this.state.item;
    if(checkInput === ""){
      this.setState({emptyInput : true})
    }
    else if (checkIndex !== null){
    const newItem = {
      id : this.state.id,
      item : this.state.item
    }
    this.state.items.splice(checkIndex, 0, newItem)
    this.setState({
      item : '',
      editItem : false,
      index : null,
      id : this.state.id +11111,
      emptyInput : false
    })
  }
  else{
    const newItem = {
      id : this.state.id,
      item : this.state.item
    }
    const updateItems = [...this.state.items, newItem];

  this.setState({
    items : updateItems,
    id : this.state.id +11111,
    item : "",
    editItem : false,
    emptyInput : false
  })
  
  }
  
}

handleDelete = (id)=>{
  const sortedItems = this.state.items.filter(item => item.id !== id);
  this.setState({
    items : sortedItems
  })
}

handleEdit = (id)=>{
  const filteredItems = this.state.items.filter(item => item.id !== id);
  const selectedItem = this.state.items.find(item => item.id === id);
  const index = this.state.items.findIndex(item=> {return item.id === id});
  console.log(index);
  this.setState({
    items : filteredItems,
    item : selectedItem.item,
    editItem :  true,
    index: index
    
  })
  
  
}
  
  render() {
    return (  
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-8 mt-4'>
              <h3 className='text-capitalize text-center'>
                Todo Input <i className='fa fa-pencil'></i>
              </h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                        emptyInput={this.state.emptyInput}
              />
              <TodoList items={this.state.items} clearList={this.clearList} 
                        handleDelete = {this.handleDelete}
                        handleEdit = {this.handleEdit}
              />
            </div>
          </div>
        </div>
    )
  }
}
