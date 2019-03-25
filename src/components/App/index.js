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
              jokes: data[Math.floor(Math.random() * (data.length) + 1)],
            })
      )
  }


handleButtonClick = () => {
  this.fetchjokes();
}

render() {
  return (
    <div className="App">
      <Jokes joke={this.state.jokes ? this.state.jokes.joke : 'try again'} 
      punchline={this.state.jokes ? this.state.jokes.punchline : 'try again'}/>
      <Button onClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;
