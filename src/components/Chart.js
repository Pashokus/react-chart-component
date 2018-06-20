import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis } from 'recharts';
import CustomTooltip from './Tooltip';
import moment from 'moment';
import styles from './chart.css';

export default class HugeChart extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      hoveredCharts: null,
      mousePosition: {
        x: 0,
        y: 0
      },
      showTooltip: false
    };

    this.setActiveBar = this.setActiveBar.bind(this);
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }
  render () {
    const { data, config } = this.props;
    const { barSize, gapBetweenBars, interval, headerWidth, fontSize } = config;
    const { hoveredCharts, mousePosition, showTooltip } = this.state;
    const width = data.length * (barSize + gapBetweenBars);

    return (
      <BarChart
        onMouseMove={ this.updateMousePosition }
        width={ width }
        height={ 200 }
        data={ data }
        barSize={ barSize }
        className={ styles['bar-chart'] }
        margin={ { top: 0, right: 0, bottom: 0, left: 0 } }>
        <Tooltip
          cursor={ false }
          wrapperStyle={ {
            visibility: showTooltip ? 'visible' : 'hidden',
            zIndex: 5
          } }
          content={ <CustomTooltip hoveredCharts={ hoveredCharts } /> }
          position={ { x: mousePosition.x, y: mousePosition.y } } />
        <CartesianGrid vertical={ false } stroke="#eeeeee" />
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
          fill="#eeeeee"
          onMouseEnter={ this.setActiveBar }
          onMouseLeave={ this.setActiveBar } />
        <Bar
          dataKey="billedTime"
          stackId="a"
          fill="#82c783"
          onMouseEnter={ this.setActiveBar }
          onMouseLeave={ this.setActiveBar } />
      </BarChart>
    );
  }

  updateMousePosition (event) {
    const { activeCoordinate } = event;

    this.setState({
      mousePosition: {
        x: activeCoordinate && activeCoordinate.x,
        y: activeCoordinate && activeCoordinate.y
      },
      showTooltip: true
    });
  }

  headerFormatter (date) {
    return moment(date, 'MM-DD-YYYY').format('MMM, DD');
  }

  setActiveBar (target, index, event) {
    const { type } = event;

    if (type === 'mouseenter') {
      this.setState({
        hoveredCharts: target
      });
    } else {
      this.setState({
        hoveredCharts: null,
        mousePosition: {
          x: 0,
          y: 0
        },
        showTooltip: false
      });
    }
  }
}
