import React from 'react';
import colors from './statusesColors';
import styles from './list-item.css';

export default (status) => {
  return (
    <span
      style={ { backgroundColor: colors[status] } }
      className={ styles['project-status'] }>
      { status }
    </span>
  );
};
