import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

/*

<Router

  basename={}
    the base URL for all locations. If your app is served from a sub-directory on your server, you'll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.
    ex:
      <BrowserRouter basename="/calendar" />
      <Link to="/today" />
    renders <a href="/calendar/today">

  forceRefresh={ false }
    If true the router will use full page refreshes on page navigation. You probably want this in browsers that don't support the HTML history API.
      ex:
        const supportsHistory = 'pushState' in window.history
        <BrowserRouter forceRefresh= { !supportsHistory } />

  getUserConfirmation={}
    A function to use to confirm navigation. Defaults to using window.confirm.
    ex:
      this is the default behavior
      const getConfirmation = (message, callback) => {
        const allowTransition = window.confirm(message)
        callback(allowTransition)
      }
      <BrowserRouter getUserConfirmation={ getConfirmation } />

  keyLength={}
    The length of location.key . Defaults to 6.
    ex:
      <BrowserRouter keyLength={ 12 } />
>
  <App />
</Router>
*/

const supportsHistory = 'pushState' in window.history;


const Palabras = () => (
  <Router
    forceRefresh={ !supportsHistory }>
    <App />
  </Router>
);

export default Palabras;
