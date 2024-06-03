// src/components/Leaderboard.js
import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  // Mock data for leaderboard
  const leaderboardData = [
    { no: 1, walletAddress: 'Wallet1', level: 'Beginner', playFee: '0.1 SOL', winnings: '0.2 SOL' },
    { no: 2, walletAddress: 'Wallet2', level: 'Intermediate', playFee: '0.2 SOL', winnings: '0.6 SOL' },
    { no: 3, walletAddress: 'Wallet3', level: 'Advanced', playFee: '0.3 SOL', winnings: '1.2 SOL' },
    { no: 4, walletAddress: 'Wallet4', level: 'Expert', playFee: '0.4 SOL', winnings: '2.0 SOL' },
  ];

  return (
    <div className="leaderboard">
      <h1>Here's a list of fellow degens</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Wallet Address</th>
            <th>Level</th>
            <th>Play Fee</th>
            <th>Winnings</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((data) => (
            <tr key={data.no}>
              <td>{data.no}</td>
              <td>{data.walletAddress}</td>
              <td>{data.level}</td>
              <td>{data.playFee}</td>
              <td>{data.winnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;


