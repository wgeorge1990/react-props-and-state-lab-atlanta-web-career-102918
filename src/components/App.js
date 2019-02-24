import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    componentDidMount = () => {
      this.fetchPets();
    }

  fetchPets = (e) => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint).then(res => res.json()).then(data => this.setState({
      pets: data
    }));

  };

  onFindPetsClick = (e) => {
    this.fetchPets()
  }

  onTypeChange = (e) => {
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
