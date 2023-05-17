import React, { useEffect, useState } from 'react';
import './VoteOption.css';

const VoteOption = ({player}) => {
    //vote count of the instance
    const [voteCount, setVoteCount] = useState(0);

    const voteClick = () => {
        setVoteCount((prevVoteCount) => prevVoteCount + 1);
    }


    //displaying Vote Option component
    return(
        <div className='container'>
        <div className='vote-bar'></div>
        <img src={player.image} className='option-image' alt='Option Image'/>
        <div className='name-section'>
          <h3>{player.name}</h3>
          <p>{player.country}</p>
        </div>
        <div>
          <h2 className='vote-count'>{voteCount}</h2>
          <button className='vote-btn' onClick={voteClick}>Vote</button>
        </div>
      </div>
    );
}

export default VoteOption;