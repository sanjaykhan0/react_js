import React, { Component } from 'react'

export default class Classcom extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
     
    }
    increse = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(){
        console.log("component did update");
    }
  render() {
    
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increse}>click</button>
      </div>
    )
  }
}
