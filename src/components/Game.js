// src/components/Game.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gameLevels from '../utils/GameLevels';
import walletUtils from '../utils/wallet';
import winSound from '../assets/sounds/Win.mp4';
import loseSound from '../assets/sounds/Lose.mp4';

const { connectWallet, playGame } = walletUtils;

const Game = () => {
  const { level } = useParams();
  const [roundsLeft, setRoundsLeft] = useState(3);
  const [message, setMessage] = useState('');
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const connect = async () => {
      const address = await connectWallet();
      setWalletAddress(address);
    };
    connect();
  }, []);

  const handlePlay = () => {
    if (roundsLeft > 0) {
      const result = playGame(level);
      if (result === 'win') {
        setRoundsLeft(roundsLeft - 1);
        if (roundsLeft === 1) {
          setMessage(`Congratulations! You've won ${gameLevels[level].payout} SOL!`);
          new Audio(winSound).play();
        } else {
          setMessage('You survived this round, keep going!');
        }
      } else {
        setMessage('You lost! Better luck next time.');
        new Audio(loseSound).play();
        setRoundsLeft(0);
      }
    }
  };

  return (
    <div className="game">
      <h1>{gameLevels[level]?.name || 'Unknown'} Level</h1>
      <p>{gameLevels[level]?.message || 'No description available.'}</p>
      <p>Price: {gameLevels[level]?.price} SOL</p>
      <p>Rounds Left: {roundsLeft}</p>
      <button onClick={handlePlay}>Let's Play</button>
      <p>{message}</p>
    </div>
  );
};

export default Game;
