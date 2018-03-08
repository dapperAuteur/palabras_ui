import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import NavBar from '../components/NavBar';
import * as apiCalls from './../actions/api';


configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders ONE <NavBar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavBar));
  });
})

it('expects fourLetterWords[] to NOT be empty', async () => {
  expect.assertions(1);
  const fourLetterWords = await handleLoadFourLetterWords();
  console.log(fourLetterWords);
  expect(fourLetterWords).not.toBe([]);
})
