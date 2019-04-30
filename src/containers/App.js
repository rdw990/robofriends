import React, {Component} from 'react'
import CardList from '../components/CardList'
// inport from file now not needed - AJAX
// import {robots} from './robots'
import {SearchBox} from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
  constructor(){
    super()
     this.state={
      robots: [],
      searchField: ''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
      .then (users => this.setState({robots: users}) )
}

  handleSearchChange = (e) => {
    // console.log(e.target.value)
    this.setState( {searchField: e.target.value})
  }
  
  render(){
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return !this.state.robots.length ? 
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox handleSearchChange={this.handleSearchChange}  />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
  }

}

export default App