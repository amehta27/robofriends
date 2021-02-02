import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import Scroll from '../components/Scroll';
import './App.css';
// import {robots} from './robots';

// import logo from './logo.svg';


class App extends Component {
   constructor(){
     super()
     this.state={
       robots : [],
       searchfield :''
     }
     console.log('constructor')
   }

   componentDidMount(){
    //  this.setState({robots : robots})
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=>{
           return response.json();
         })
         .then(users=>{
            this.setState({robots : users})
     
         });
    //short form if you have one line of cose inside the bracket 
    //
    // fetch('https://jsonplaceholder.typicode.com/users')
    //      .then(response=> return response.json());
    //      .then(users=>this.setState({robots : users})   
         
        }

   onSearchChange = (event) => {
     this.setState({searchfield : event.target.value})
     console.log(event.target.value)
   }

  render(){
     const filteredRobots = this.state.robots.filter(robots => {
         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
     })
     console.log('render')
     if (this.state.robots.length === 0 ){
         return<h1>Loading</h1>
     }else{
        return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots}/>
            </ErrorBoundry>
            </Scroll>
        </div>
  );
     }
  }
  }


export default App;
