import React, {Component} from 'react'
import CardList from './CardList'
import {robots} from './robots'
import {SearchBox} from './SearchBox'
import './App.css'

class App extends Component {
  constructor(){
    super()
     this.state={
      robots: robots,
      searchField: ''
    }
  }

  handleSearchChange = (e) => {
    // console.log(e.target.value)
    this.setState( {searchField: e.target.value})
  }
  

  render(){
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox handleSearchChange={this.handleSearchChange}  />
        <CardList robots={filteredRobots} />
      </div>
    )
  }

}

export default App