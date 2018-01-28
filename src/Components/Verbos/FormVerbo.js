import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class FormVerbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 'verbos/',
      spanish: '',
      english: '',
      reflexive: false,
      irregular: false,
      categoría_de_irregular: '',
      cambiar_de_irregular: '',
      terminación: '',
      grupo: 0
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
    this.props.onSave(p, pObj);
    this.setState({
      spanish: '',
      english: '',
      reflexive: false,
      irregular: false,
      categoría_de_irregular: '',
      cambiar_de_irregular: '',
      terminación: '',
      grupo: 0
    });
  }

  render(){
    const { spanish, english, reflexive, irregular, categoría_de_irregular, cambiar_de_irregular, terminación, grupo } = this.state;
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
              value={ spanish }
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
              value={ english }
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
              value={ reflexive }
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
              value={ irregular }
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
              value={ categoría_de_irregular }
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
              value={ cambiar_de_irregular }
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
              value={ terminación }
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
              value={ grupo }
              autoComplete="off"
              onChange={ this.handleChange } />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: 'flex-end', marginRight: 0 }}
          >
            SAVE
          </button>
        </form>
      </div>
    )
  }
}

FormVerbo.propTypes = {
  p: PropTypes.string.isRequired,
  spanish: PropTypes.string.isRequired,
  english: PropTypes.string,
  reflexive: PropTypes.bool,
  irregular: PropTypes.bool,
  categoría_de_irregular: PropTypes.string,
  cambiar_de_irregular: PropTypes.string,
  terminación: PropTypes.string,
  grupo: PropTypes.number
}

FormVerbo.defaultProps = {
  onSave() {},
  p: 'verbos/',
  reflexive: false,
  irregular: false
}

export default FormVerbo;
