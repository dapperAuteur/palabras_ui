import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import App from '../containers/App';
import NavBar from './NavBar';

// console.log(ReactTestUtils);

describe("Jasmine Matchers", function () {
  it('allows for === and deep equality', function() {
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
})

// describe("NavBar Component with NO user in state or localStorage")

// describe("user.token === 'undefined' WILL show signUp and signIn buttons", function () {
//
// })

describe('NavBar', function () {
  var Utils = ReactTestUtils.TestUtils;
  console.log(Utils);

  it('can render without error', function() {
    var component, element;
    element = React.createElement(
      NavBar,
      {}
    );
    expect(function () {
      component = App.renderIntoDocument(element);
    }).not.toThrow();
  });
})
