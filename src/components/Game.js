import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gameLevels from '../utils/GameLevels';
import winSound from '../assets/sounds/win.mp3';
import loseSound from '../assets/sounds/lose.mp3';

const Game = () => {
  const { level } = useParams();
  const [attemptsLeft, setAttemptsLeft] = useState(gameLevels[level]?.rounds || 3);
  const [message, setMessage] = useState('');
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (window.solana && window.solana.isPhantom) {
        try {
          const response = await window.solana.connect();
          console.log('Wallet connected:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        } catch (err) {
          console.error('Wallet connection failed:', err);
        }
      } else {
        alert('Please install the Phantom wallet extension');
      }
    };

    connectWallet();
  }, []);

  const handlePlay = () => {
    const playGame = (level) => {
      const game = gameLevels[level];
      const chambers = 6;
      const bulletPosition = Math.floor(Math.random() * chambers);

      if (bulletPosition < game.bullets) {
        return 'lose';
      } else {
        return 'win';
      }
    };

    if (attemptsLeft > 0) {
      const result = playGame(level);
      if (result === 'win') {
        new Audio(winSound).play();
        setMessage(`Congratulations! You survived. ${attemptsLeft - 1} rounds left.`);
        setAttemptsLeft(attemptsLeft - 1);
      } else {
        new Audio(loseSound).play();
        setMessage('You lost! Game over.');
        setAttemptsLeft(0);
      }
    }
  };

  return (
    <div className="game">
      <h1>{gameLevels[level]?.name || 'Unknown'} Level</h1>
      <p>{gameLevels[level]?.message || 'No description available.'}</p>
      <p>Price: {gameLevels[level]?.price} SOL</p>
      <p>Rounds Left: {attemptsLeft}</p>
      <button onClick={handlePlay}>Let's Play</button>
      <p>{message}</p>
    </div>
  );
};

export default Game;
