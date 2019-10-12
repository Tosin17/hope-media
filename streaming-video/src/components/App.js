import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamView from './streams/StreamView';
import Nav from './shared/Nav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/create" component={StreamCreate}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/view" component={StreamView}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
