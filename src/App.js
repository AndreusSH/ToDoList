import React, {Component} from 'react';
import List from './showList'



class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    item: '',
    values: []
  };


  this.addItem = this.addItem.bind(this);
this.removeElement = this.removeElement.bind(this)
 }
 handleChange =(e) => {
     this.setState({item: e.target.value});
   }
 addItem(e){
e.preventDefault();
this.setState({
      item: '',
      values: [...this.state.values, this.state.item].filter(x => x !== "")
    });
}
removeElement(element){
     this.state.values.forEach(function (value) {
    console.log(value);
  });
    this.setState({
        values: this.state.values.filter(el => el !== element)
    })
    console.log(this.state.values)
}

  render(){

    return (
       <div className="main">
       <div className = "header">
       <h1>Andrea's to do list</h1>

       <form onSubmit={this.addItem}>
       <input value={this.state.item}  onChange={this.handleChange}
       placeholder="write a task">
       </input>
       <button type ="submit">ADD</button>
        </form>
       </div>
<List array={this.state.values} remove = {this.removeElement}/>
       </div>
    );
    }

  }

export default App;
