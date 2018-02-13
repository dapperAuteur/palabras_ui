import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class UpdateVerbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      cambiar_de_irregular: '',
      categoría_de_irregular: '',
      english: '',
      grupo: 0,
      irregular: false,
      p: 'verbos/',
      reflexive: false,
      spanish: '',
      terminación: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let { p, ...pObj } = { p, ...this.state };
    console.log(p, pObj);
    this.props.data.onSave(p, pObj);
    this.setState({
      cambiar_de_irregular: '',
      categoría_de_irregular: '',
      english: '',
      grupo: 0,
      irregular: false,
      reflexive: false,
      spanish: '',
      terminación: ''
    })
  }

  render(){
    const { spanish, english, reflexive, irregular, categoría_de_irregular, cambiar_de_irregular, terminación, grupo } = this.state;
    const verbo = this.props.data.props.verbo;
    console.log(verbo);
    return (
      <div className='word-form-conatiner'>
        <form className='word-form' onSubmit={ this.handleSubmit }>
          <div className='word-form-line'>
            <label htmlFor='verbo-spanish-input'>Spanish Word</label>
            <input
              id='verbo-spanish-input'
              key='spanish'
              name='spanish'
              type='text'
              value={ verbo.spanish }
              size={ 15 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-english-input'>English Translation</label>
            <input
              id='verbo-english-input'
              key='english'
              name='english'
              type='text'
              value={ verbo.english }
              size={ 15 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-reflexive-input'>Reflexive</label>
            <input
              id='verbo-reflexive-input'
              key='reflexive'
              name='reflexive'
              type='boolean'
              value={ verbo.reflexive }
              size={ 10 }
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-irregular-input'>Irregular</label>
            <input
              id='verbo-irregular-input'
              key='irregular'
              name='irregular'
              type='boolean'
              value={ verbo.irregular }
              size={ 10 }
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-categoría-de-irregular-input'>Categoría de Irregular</label>
            <input
              id='verbo-categoría-de-irregular-input'
              key='categoría_de_irregular'
              name='categoría_de_irregular'
              type='text'
              value={ verbo.categoría_de_irregular }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-cambiar-de-irregular-input'>Cambiar de Irregular</label>
            <input
              id='verbo-cambiar-de-irregular'
              key='cambiar_de_irregular'
              name='cambiar_de_irregular'
              type='text'
              value={ verbo.cambiar_de_irregular }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-terminación-input'>Terminación</label>
            <input
              id='verbo-terminación-input'
              key='terminación'
              name='terminación'
              type='text'
              value={ verbo.terminación }
              size={ 10 }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <div className='word-form-line'>
            <label htmlFor='verbo-grupo'>Grupo</label>
            <input
              id='verbo-grupo'
              key='grupo'
              name='grupo'
              type='decimal'
              value={ verbo.grupo }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            UPDATE
          </button>
        </form>
      </div>
    )
  }
}

UpdateVerbo.propTypes = {
  _id: PropTypes.string.isRequired,
  cambiar_de_irregular: PropTypes.string,
  categoría_de_irregular: PropTypes.string,
  english: PropTypes.string,
  p: PropTypes.string.isRequired,
  grupo: PropTypes.number,
  irregular: PropTypes.bool,
  reflexive: PropTypes.bool,
  spanish: PropTypes.string.isRequired,
  terminación: PropTypes.string,
}

UpdateVerbo.defaultProps = {
  onSave() {},
  _id: '',
  cambiar_de_irregular: '',
  categoría_de_irregular: '',
  grupo: 100,
  english: '',
  p: 'verbos/',
  irregular: false,
  reflexive: false,
  spanish: '',
  terminación: '-ar'
}

export default UpdateVerbo
