import React from 'react';
import PropTypes from 'prop-types';
import './GameVerbo.css';

const GameVerbo = props => {
  const { user, verbo, verbos } = props;

  return (
    <div className="GameVerbo">
      <h1>Spanish: <span className="spanish">{ verbo.spanish }</span></h1>
      <h2>English: <span className="english">{ verbo.english }</span></h2>
      <div className="hint">
        <h3>Hint</h3>
        <h3>Reflexive: { verbo.reflexive }</h3>
        <h3>Irregular: { verbo.irregular }</h3>
        <h3>Categoría de Irregular: { verbo.categoría_de_irregular }</h3>
        <h3>Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
      </div>
      <button className="btn">
        SHOW WORD
      </button>
      <button className="btn">
        SHOW HINT
      </button>
    </div>
  )
}

GameVerbo.propTypes = {
  user: PropTypes.object,
  verbo: PropTypes.object,
  verbos: PropTypes.array
}

GameVerbo.defaultProps = {
  user: {
    username: 'awe',
    verbo: {
      "english": "to help",
      "reflexive": false,
      "irregular": false,
      "terminación": "-ar",
      "grupo": 0,
      "_id": "5a6d1177adce4c0fce1e4f18",
      "spanish": "ayudar"
    },
    verbos: []
  }
}
export default GameVerbo;
