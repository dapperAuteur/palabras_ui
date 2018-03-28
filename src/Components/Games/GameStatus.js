import React from 'react';
import PropTypes from 'prop-types';
import './GameStatus.css';

const GameStatus = (props) => {
  console.log(props);
  const { game } = { ...props };
  let { attempts, bulls, cows, guess, guesses, message, name, score, winning_word, won, word_to_consider_for_library } = { ...game };
  console.log(game);

  return (
    <div className="gameStatus">
      <span className="gameStat">Message: { message }</span>
      <span className="gameStat">Points { score }</span>
      <span className="gameStat">Guesses { attempts }</span>
      <span className="gameStat">Cows { cows }</span>
      <span className="gameStat">Bulls { bulls }</span>
    </div>
  )
}

GameStatus.propTypes = {
  game: PropTypes.shape({
    bulls: PropTypes.number,
    cows: PropTypes.number,
    guesses: PropTypes.arrayOf(PropTypes.string),
    userId: PropTypes.string,
    score: PropTypes.number,
    winning_word: PropTypes.string,
    won: PropTypes.bool,
    word_to_consider_for_library: PropTypes.arrayOf(PropTypes.string)
  })
}

GameStatus.defaultProps = {
  game: {
    bulls: 0,
    cows: 0,
    guesses: ["full", "acme", "tool"],
    score: 0,
    won: false,
    word_to_consider_for_library: []
  }
}

export default GameStatus;
