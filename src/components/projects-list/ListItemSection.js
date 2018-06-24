import React from 'react';
import styles from './list-item.css';

export default (props) => {
  const { label, value, render } = props;
  const element = render || <span>{ typeof value === 'object' ? value.name : value }</span>;

  return (
    <div
      className={ styles['list-item-section'] }
      style={ { maxWidth: label === 'project' ? '300px' : 'auto' } }>
      <span>{ label }</span>
      {element}
    </div>
  );
};
