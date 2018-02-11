import React from 'react';

const DetailsVerbo = (props) => {
  // let { verbo } = { ...props };
  const verbo = props.data.props.verbo;
  const onLoadRandomVerbos = props.data.onLoadRandomVerbos;

  return (
    <div>
      <h1>Details of Random Spanish Verb: { verbo.spanish }</h1>
      <h3>Group: { verbo.group }</h3>
      <h3>Translation: { verbo.english }</h3>
      <h3>Reflexive: { verbo.reflexive }</h3>
      <h3>Irregular: { verbo.irregular }</h3>
      <h3>Categoría de Irregular: { verbo.categoría_de_irregular }</h3>
      <h3>Cambiar de Irregular: { verbo.cambiar_de_irregular }</h3>
      <button
        onClick={ onLoadRandomVerbos }
        className="btn btn-default">
        Next Verbo
      </button>
    </div>
  )
}

export default DetailsVerbo;
