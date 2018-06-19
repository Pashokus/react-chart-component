import React, { PureComponent } from 'react';
import { BarChart, Bar, CartesianGrid, Tooltip } from 'recharts';
import CustomTooltip from './Tooltip';
import debounce from 'debounce';
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
    const { data, width, barSize } = this.props;
    const { hoveredCharts, mousePosition, showTooltip } = this.state;

    return (
      <BarChart
        onMouseMove={ debounce(this.updateMousePosition, 70) }
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
        x: activeCoordinate.x,
        y: activeCoordinate.y
      },
      showTooltip: true
    });
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
