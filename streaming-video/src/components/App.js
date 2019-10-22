import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import Nav from './shared/Nav';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Nav />
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/create" component={StreamCreate}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/view" component={StreamView}></Route>
      </Router>
    );
  }
}

export default App;
