import React from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';

class App extends React.Component {
  state = {
    characters: [
    ]
  };
  removeCharacter = (index) => {
    console.log("Remove a character");

    const { characters } = this.state
    console.log(characters);

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
        // pass in index, return new array
      })
    })

  };

  handleSubmit = character => {
    //takes existing this.state.characters, adds new character
    this.setState({characters: [...this.state.characters, character]})
  };

  componentDidMount(){
    const { characters } = this.state
    console.log(characters)

  }
  render() {

    const { characters } = this.state;
    console.log(characters)

    return (
      <div className="container">
        <Table peopleData={characters} removeCharacter = {this.removeCharacter}/>
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

// function App() {
// functional compo can't have states unless using react hooks
// react stateless functional components

// const characters = [
//   {
//     name: 'Charlieeeeee',
//     job: 'Janitor',
//   },
//   {
//     name: 'Macssssss!',
//     job: 'Bouncer',
//   },
//   {
//     name: 'Deeeeeee',
//     job: 'Aspring actress',
//   },
//   {
//     name: 'Dennissssss',
//     job: 'Bartender',
//   }
// ];
// console.log(characters, "YO")
//   return (
//     <div className="container"> 
//       <Table peopleData={characters}/>
//     </div>
//   );
// }

export default App;
