import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class UpdateVerbo extends Component {
  constructor(props) {
    super(props);
    const { _id, spanish, english, reflexive, irregular, categoría_de_irregular, cambiar_de_irregular, terminación, grupo } = this.props.data.props.verbo;
    this.state = {
      _id,
      cambiar_de_irregular,
      categoría_de_irregular,
      english,
      grupo,
      irregular,
      p: 'verbos/',
      reflexive,
      spanish,
      terminación,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    console.log(this.props);
  }

  handleChange(e){
    // if (e.target.name === "cambiar_de_irregular") {
    //   this.setState({ cambiar_de_irregular: e.target.value });
    // } else if (e.target.name === "categoría_de_irregular") {
    //   this.setState({ categoría_de_irregular: e.target.value });
    // } else if (e.target.name === "english") {
    //   this.setState({ english: e.target.value });
    // } else if (e.target.name === "grupo") {
    //   this.setState({ grupo: e.target.value });
    // } else if (e.target.name === "irregular") {
    //   this.setState({ irregular: e.target.value });
    // } else if (e.target.name === "reflexive") {
    //   this.setState({ reflexive: e.target.value });
    // } else if (e.target.name === "spanish") {
    //   this.setState({ spanish: e.target.value });
    // } else if (e.target.name === "terminación") {
    //   this.setState({ terminación: e.target.value });
    // } else {
    //   console.log("no matching name");
    // }
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let { p, ...pObj } = { p, ...this.state };
    console.log(p, pObj);
    this.props.data.onSave(p, pObj);
    this.props.history.push('/words/verbo');
  }

  render(){
    const { _id, spanish, english, reflexive, irregular, categoría_de_irregular, cambiar_de_irregular, terminación, grupo } = this.state;
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
            UPDATE
          </button>
          <Link
            to={ '/words/verbo' }
            id="Verbos"
            className="btn btn-default">
            CANCEL
          </Link>
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

export default UpdateVerbo;
