// src/components/Game.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gameLevels from '../utils/GameLevels';
import winSound from '../assets/sounds/Win.mp4';
import loseSound from '../assets/sounds/Lose.mp4';
import walletUtils from '../utils/wallet';
import GameLevel from './GameLevel';
import './Game.css';

const Game = () => {
  const { level: levelName } = useParams();
  const level = gameLevels[levelName];
  const [attemptsLeft, setAttemptsLeft] = useState(level?.attempts || 0);
  const [message, setMessage] = useState('');

  const handlePlay = async () => {
    const walletAddress = await walletUtils.connectWallet();
    if (!walletAddress) {
      setMessage('Wallet connection failed.');
      return;
    }

    const gameResult = walletUtils.playGame(levelName);

    if (gameResult === 'win') {
      setMessage('Congratulations, you won!');
      new Audio(winSound).play();
    } else if (attemptsLeft > 1) {
      setAttemptsLeft(attemptsLeft - 1);
      setMessage(`You survived this round. Attempts left: ${attemptsLeft - 1}`);
    } else {
      setMessage('Sorry, you lost.');
      new Audio(loseSound).play();
    }
  };

  if (!level) return <p>Invalid level</p>;

  return (
    <div className="game">
      <GameLevel level={level} />
      <p>Attempts Left: {attemptsLeft}</p>
      <button onClick={handlePlay}>Let's Play</button>
      <p>{message}</p>
    </div>
  );
};

export default Game;
