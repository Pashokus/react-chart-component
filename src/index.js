import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/chart/Widget';
import data from './mocks/data.json';
import widgetTypes from './configs/widgetTypes';
import styles from './index.css';

class App extends Component {
  render () {
    return (
      <div className={ styles['widgets-container'] }>
        {Object.keys(widgetTypes).map((type) => {
          return <Widget
            key={ type }
            data={ data }
            type={ type } />;
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
