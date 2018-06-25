import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectsList from './components/projects-list/';
import Widget from './components/chart/';
import data from './mocks/data.json';
import projectsData from './mocks/projects.json';
import widgetTypes from './configs/widgetTypes';
import styles from './index.css';

class App extends Component {
  render () {
    return (
      <div>
        {[
          this.renderCharts(),
          this.renderList()
        ]}
      </div>
    );
  }

  renderList () {
    return <ProjectsList data={ projectsData } />;
  }

  renderCharts () {
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
