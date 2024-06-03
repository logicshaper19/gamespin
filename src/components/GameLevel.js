// src/components/GameLevel.js
import React from 'react';
import PropTypes from 'prop-types';

const GameLevel = ({ level }) => {
  if (!level) return <p>Invalid level</p>;

  return (
    <div className="game-level">
      <h1>{level.name} Level</h1>
      <p>{level.message}</p>
      <p>Price: {level.price} SOL</p>
      <p>Attempts: {level.attempts}</p>
      <p>Payout Multiplier: {level.payoutMultiplier}</p>
    </div>
  );
};

GameLevel.propTypes = {
  level: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    attempts: PropTypes.number.isRequired,
    payoutMultiplier: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameLevel;
