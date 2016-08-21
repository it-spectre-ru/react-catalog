import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Админка</h1>
        <p>react, redux, es6 - приложение</p>
        <Link to="about" className="btn btn-primary btn-lg">Узнать побольше</Link>
      </div>
    );
  }
}

export default HomePage;


