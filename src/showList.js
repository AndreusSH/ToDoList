import React, {Component} from 'react';

class List extends React.Component {


  render(){

       const menu = this.props.array.map((x) =>{

         return (
           <ul>
           <li onClick = {() =>{this.props.remove(x)}}key={Date.now()}>{x}</li>

           </ul>)
       })
return(

  <div>{menu} </div>)
  }
}
export default List;
