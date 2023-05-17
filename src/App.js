import './App.css';
import VoteOption from './VoteOption';
//import logo from './logo.svg';

//storing data for different players
const playerOne = {
  "id" : "1",
  "name" : "Kumar Sangakkara",
  "country" : "Sri Lanka",
  "image" : "./images/kumar-sangakkara.jpg"
}
const playerTwo = {
  "id" : "2",
  "name" : "Sachin Tendulkar",
  "country" : "India",
  "image" : "./images/sachin-tendulkar.jpg"
}
const playerThree = {
  "id" : "3",
  "name" : "James Anderson",
  "country" : "United Kingdom",
  "image" : "./images/james-anderson.jpg"
}


function App() {
  //displaying all components
  return (
    <div className="App">
        <header className="App-header">
          <h1>Simple Voting App</h1>
          <VoteOption player={playerOne}/>
          <VoteOption player={playerTwo}/>
          <VoteOption player={playerThree}/>
          <h2>{window.AllVoteCount}</h2>
          <p className='credit'>Vinura Gallage - ICT/20/842</p>
        </header>
      </div>
  );
}

export default App;
