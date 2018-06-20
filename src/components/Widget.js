import React, { PureComponent } from 'react';
import widgetTypes from '../configs/widgetTypes';
import widgetSizes from '../configs/widgetSizes';
import Chart from './Chart';
import styles from './widget.css';

export default class Widget extends PureComponent {
  render () {
    const { data, type } = this.props;
    const dataToShow = Object.keys(data).map(date => Object.assign({}, data[date], { name: date }));
    const config = widgetSizes[type || widgetTypes.HUGE];

    return (
      <div className={ styles['widget-container'] }>
        <Chart
          data={ dataToShow }
          config={ config } />
      </div>
    );
  }
}
