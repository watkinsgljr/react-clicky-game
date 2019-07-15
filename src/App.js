import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    score: 0,
    highScore: 0
  };

  removeplayer = id => {
    // Filter this.state.players for players with an id not equal to the id being removed
    const players = this.state.players.filter(player => player.id !== id);
    // Set this.state.players equal to the new players array
    this.setState({ players });
  };

  newHighScore = () => {
    if (this.state.score > this.state.highScore) {
      this,this.setState({highScore: this.state.score});
    }


  }



  // Map over this.state.players and render a playerCard component for each player object
  render() {
    return (
      <Wrapper>
        <Title>Players List</Title>
        {this.state.players.map(player => (
          <PlayerCard
            selectPlayer={this.selectPlayer}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            position={player.position}
            team={player.team}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;