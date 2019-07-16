import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import players from "./players.json";

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    score: 0,
    highScore: 0
  };

  // removeplayer = id => {
  //   // Filter this.state.players for players with an id not equal to the id being removed
  //   const players = this.state.players.filter(player => player.id !== id);
  //   // Set this.state.players equal to the new players array
  //   this.setState({ players });
  // };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score});
    }


  }

  // selectPlayer = id => {
  //   this.state.players.find(player, i) => {
  //     if(player.id === id) {
  //       if (player[i].count === 0) {
  //         player[i].count = player[i].count + 1;
  //       }
  //     }
  //   }
  // }



  // Map over this.state.players and render a playerCard component for each player object
  render() {
    return (
      <Wrapper>

        <Title>Players List</Title>

        <Header 
        score={this.state.score}
        highScore={this.state.highScore}>
        </Header>

        {this.state.players.map(player => (
          <PlayerCard
            selectPlayer={this.selectPlayer}
            id={player.id}
            key={player.id}
            selected={false}
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
