import React, { useState } from 'react';
import './VoteOption.css';

const VoteOption = ({player, onValueChange, voteBar}) => {
    //vote count of the current instance
    const [voteCount, setVoteCount] = useState(0);

    //onlick action of the vote button
    const voteClick = () => {
        const newCount = voteCount + 1;
        setVoteCount(newCount);

        // passing the updated count and the array index to the parent component
        onValueChange(player.id, newCount);
    }

    //displaying Vote Option component
    return(
        <div className='container'>
        <div className='vote-bar' style={{width:voteBar + 'vw'}}></div>
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