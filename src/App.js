import React, {Component} from 'react'
import CardList from './CardList'
// import {robots} from './robots'
import {SearchBox} from './SearchBox'
import './App.css'
import Scroll from './Scroll'

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

    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
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

}

export default App