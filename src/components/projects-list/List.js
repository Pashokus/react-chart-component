import React, { PureComponent } from 'react';
import ListItem from './ListItem';
import styles from './list.css';

export default class ProjectsList extends PureComponent {
  render () {
    const { data } = this.props;

    if (data && data.length) {
      return (
        <ul className={ styles['projects-list'] }>
          {data.map(this.renderListItem)}
        </ul>
      );
    }
  }

  renderListItem (project, index) {
    return <ListItem key={ index } item={ project } />;
  }
}
