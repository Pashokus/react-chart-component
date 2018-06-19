import React, { PureComponent } from 'react';
import moment from 'moment';
import widgetTypes from '../configs/widgetTypes';
import styles from './widget-header.css';

export default class WidgetHeader extends PureComponent {
  constructor (props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
  }

  render () {
    const { headers, width } = this.props;

    return (
      <div style={ { width: width } } className={ styles['header-container'] }>
        {headers.map(this.renderHeader)}
      </div>
    );
  }

  renderHeader (date, index) {
    const { headerWidth, type, width, headers } = this.props;
    const dateObj = moment(date, 'MM-DD-YYYY');
    const dateFormatted = dateObj.format('MMM, DD');
    let header = headerWidth;
    let className;
    let operand = 2;

    switch (type) {
    case widgetTypes.HUGE:
      className = 'huge';
      break;
    case widgetTypes.LARGE:
      className = 'large';
      break;
    case widgetTypes.MEDIUM:
      className = 'medium';
      operand = 4;

      const amount = parseInt(headers.length / 3, 10);
      const headersLength = amount * parseInt(headerWidth, 10);
      const emptySpace = width - headersLength;

      header = emptySpace / (headers.length - amount);

      break;
    default:
      className = 'huge';
    }

    let title = '';

    if (index % operand === 0) {
      title = dateFormatted;
    }

    return (
      <div
        key={ dateFormatted }
        style={ { width: title ? headerWidth : header } }
        className={ styles[className] }>{title}</div>
    );
  }
}
