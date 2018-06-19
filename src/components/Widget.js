import React, { PureComponent } from 'react';
import widgetTypes from '../configs/widgetTypes';
import widgetSizes from '../configs/widgetSizes';
import Chart from './Chart';
import WidgetHeader from './WidgetHeader';
import styles from './widget.css';

export default class Widget extends PureComponent {
  render () {
    const { data, type } = this.props;
    const dates = Object.keys(data);
    const dataToShow = dates.map(date => Object.assign({}, data[date], { name: date }));
    const { headerWidth, barSize, gapBetweenBars } = widgetSizes[type || widgetTypes.HUGE];
    const chartWidth = dataToShow.length * (barSize + gapBetweenBars);

    return (
      <div className={ styles['widget-container'] }>
        <WidgetHeader
          headers={ dates }
          headerWidth={ headerWidth }
          type={ type }
          width={ chartWidth } />
        <Chart
          data={ dataToShow }
          barSize={ barSize }
          width={ chartWidth } />
      </div>
    );
  }
}
