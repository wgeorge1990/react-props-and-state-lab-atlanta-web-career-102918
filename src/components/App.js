import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      },
      filteredPets: []
    }
    componentDidMount = () => {
      this.fetchPets();
    }

  filterPets = () => {
    
  }
    

  fetchPets = (e) => {
    fetch('/api/pets').then(res => res.json()).then(data => this.setState({
      pets: data
    }))
  }

  onFindPetsClick = (e) => {
    console.log("hello")
    console.log(this.state.pets)
  }

  onTypeChange = (e) => {
    console.log(e.target.value)
    this.setState({
      filters: {...this.state.filters, type: e.target.value}
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onTypeChange={this.onTypeChange} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
