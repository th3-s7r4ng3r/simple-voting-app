import './App.css';
import { useState } from 'react';
import VoteOption from './VoteOption';

//storing data for different players
const playerOne = {
  "id" : "0",
  "name" : "Kumar Sangakkara",
  "country" : "Sri Lanka",
  "image" : "./images/kumar-sangakkara.jpg"
}
const playerTwo = {
  "id" : "1",
  "name" : "Sachin Tendulkar",
  "country" : "India",
  "image" : "./images/sachin-tendulkar.jpg"
}
const playerThree = {
  "id" : "2",
  "name" : "James Anderson",
  "country" : "United Kingdom",
  "image" : "./images/james-anderson.jpg"
}


function App() {
  //declaring variable for all votes
  const [totalVotes, setTotalVotes] = useState(0);
  const [voteBarValueArray, setVoteBarValueArray] = useState([0, 0, 0]);

  //function to get total votes
  const getTotalVotes = (index, childVoteCount, type) => {
    if(type == "add"){
      setTotalVotes((prevTotalVotes) => prevTotalVotes + 1);
    } else if (type =="rem"){
      setTotalVotes((prevTotalVotes) => prevTotalVotes - 1);
    }

    //getting updated vote counts and store it in an array
    setVoteBarValueArray((prevVoteBarValueArray) => {
      const newArray = [...prevVoteBarValueArray];
      newArray[index] = childVoteCount;
      return newArray
    })
  };
  
  //calculating the voting bar size
  const calVoteBarSize = (index) =>{
    if(totalVotes != 0){
      return voteBarValueArray[index]/totalVotes*54;
    } else {
      return 0;
    }
  };

  //displaying all components
  return (
    <div className="App">
        <header className="App-header">
          <h1>Simple Voting App</h1>
          <VoteOption player={playerOne} onValueChange={getTotalVotes} voteBar={calVoteBarSize(0)}/>
          <VoteOption player={playerTwo} onValueChange={getTotalVotes} voteBar={calVoteBarSize(1)}/>
          <VoteOption player={playerThree} onValueChange={getTotalVotes} voteBar={calVoteBarSize(2)}/>
          <p className='credit'>Vinura Gallage - ICT/20/842</p>
          <h1 className='total-count'>{totalVotes}</h1>
        </header>
      </div>
  );
}

export default App;
