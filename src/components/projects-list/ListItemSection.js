import React from 'react';
import styles from './list-item.css';

const getLabel = (property) => {
  const labels = {
    date: 'Date',
    time: 'Time',
    project: 'Project',
    amount: 'Value',
    status: 'Status'
  };

  return labels[property];
};

export default (props) => {
  const { property, value, render } = props;
  const element = render || <span>{ typeof value === 'object' ? value.name : value }</span>;

  return (
    <div
      className={ `${styles['list-item-section']} ${styles[property] || ''}` }>
      <span>{ getLabel(property) }</span>
      {element}
    </div>
  );
};
