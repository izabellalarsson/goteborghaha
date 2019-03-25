import React, { Component } from 'react';
import './App.css';
import Button from '../Button'
import Jokes from '../Jokes'

class App extends Component {

  state = {
    jokes: [],
  }
  componentDidMount() {
      this.fetchjokes();
  }

  fetchjokes = () => {
      const api = "https://goteborghaha.herokuapp.com/jokes"
      
      fetch(api)
      .then(res => res.json())
      .then(data => 
              this.setState({
              jokes: data[Math.floor(Math.random() * (data.length + 1) + 1)],
            })
      )
  }


handleButtonClick = () => {
  this.fetchjokes();
}

render() {
  return (
    <div className="App">
      <Jokes text={this.state.jokes.joke}/>
      <Button onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;
