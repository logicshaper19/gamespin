// src/components/GameLevelInfo.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import gameLevels from '../utils/GameLevels';
import './GameLevelInfo.css';

const GameLevelInfo = ({ match }) => {
  const level = match.params.level;
  const history = useHistory();

  const handlePlay = () => {
    history.push(`/game/${level}`);
  };

  return (
    <div className="game-level-info">
      <h1>{gameLevels[level]?.name || 'Unknown'} Level</h1>
      <p>{gameLevels[level]?.message || 'No description available.'}</p>
      <p>Price: {gameLevels[level]?.price} SOL</p>
      <p>Payout: {gameLevels[level]?.payout} SOL</p>
      <button onClick={handlePlay}>Let's Play</button>
    </div>
  );
};

export default GameLevelInfo;
