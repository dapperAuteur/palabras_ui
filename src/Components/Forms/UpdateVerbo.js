import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../CSS/Form.css';

class UpdateVerbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: 'verbos/',
      _id: '',
      spanish: '',
      english: '',
      reflexive: false,
      irregular: false,
      categoría_de_irregular: '',
      cambiar_de_irregular: '',
      terminación: '',
      grupo: 0
    }
  }


}
