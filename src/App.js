import React, { Component } from "react";
import AgesButton from "./components/AgesButton";
import Container from "./components/Container";
import NamesButton from "./components/NamesButton";
import Title from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  sortNames = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends.sort((a, b) => (a.name > b.name) ? 1 : -1)
      //.map((item, i) => <SearchForm key={i} data={item} />);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    console.log("hello")
  };

  sortAges = () => {
    console.log("HELLLO")
    let friends = this.state.friends.sort((a,b) => (a.age > b.age) ? 1 : -1)
    this.setState({ friends });
  };

  // Map over this.state.friends and render a SearchForm component for each friend object
  render() {
    //console.log(this.state.friends.sort((a, b) => (a.name > b.name) ? 1 : -1))
    // .map(data => data.name)
    return (
      <Container>
      
        <Title>Friends List</Title>
        <NamesButton cb={this.sortNames}/> <AgesButton cb={this.sortAges}/>
        
        {this.state.friends.map(friend => (
          <SearchForm
            name={friend.name}
            age={friend.age}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        
        </Container>
    );
  }
}

export default App;