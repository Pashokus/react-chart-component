import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis } from 'recharts';
import CustomTooltip from './Tooltip';
import moment from 'moment';
import styles from './chart.css';

export default class Chart extends PureComponent {
  render () {
    const { data, config } = this.props;
    const { barSize, gapBetweenBars, interval, headerWidth, fontSize } = config;
    const width = data.length * (barSize + gapBetweenBars);

    return (
      <BarChart
        width={ width }
        height={ 200 }
        data={ data }
        barSize={ barSize }
        margin={ { top: 0, right: 6, bottom: 0, left: 6 } }>
        <defs>
          <linearGradient
            gradientTransform="rotate(90)"
            id="unbilled">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.5)" />
          </linearGradient>
        </defs>
        <Tooltip
          cursor={ false }
          content={ <CustomTooltip /> } />
        <CartesianGrid fill="#ffffff" vertical={ false } stroke="#eeeeee" />
        <XAxis
          axisLine={ false }
          tickLine={ false }
          stroke="#898989"
          tick={ { fontSize } }
          interval={ interval }
          dataKey="name"
          orientation="top"
          width={ headerWidth }
          tickFormatter={ this.headerFormatter } />
        <Bar
          dataKey="unbilledTime"
          stackId="a"
          fill="url(#unbilled)"
          className={ styles['bar'] } />
        <Bar
          dataKey="billedTime"
          stackId="a"
          fill="#82c783" />
      </BarChart>
    );
  }

  headerFormatter (date) {
    return moment(date, 'MM-DD-YYYY').format('MMM, DD');
  }
}
