import React, { Component } from "react";
import "./App.css";
import Button from "../Button";
import Jokes from "../Jokes";
import Header from "../Header";

class App extends Component {
  state = {
    jokes: [],
    clicked: false,
  };
  componentDidMount() {
    this.fetchjokes();
  }

  fetchjokes = () => {
    const api = "https://goteborghaha.herokuapp.com/jokes";

    fetch(api)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          jokes: data[Math.floor(Math.random() * data.length + 1)],
        })
      );
  };

  handleButtonClick = () => {
    this.fetchjokes();
    this.setState({
      clicked: true,
    });
  };
  render() {
    console.log(test);
    return (
      <div className="App">
        {this.state.clicked ? (
          <Header text="GOTEBORGHAHA" />
        ) : (
          <Header text="" />
        )}
        {this.state.clicked ? (
          <Jokes
            joke={this.state.jokes ? this.state.jokes.joke : "try again"}
            punchline={this.state.jokes ? this.state.jokes.punchline : ""}
          />
        ) : (
          <Jokes text="hello and welcome to:" name="GOTEBORGHAHA" />
        )}
        <Button onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;
