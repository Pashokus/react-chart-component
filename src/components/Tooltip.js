import React, { PureComponent } from 'react';
import moment from 'moment';
import styles from './tooltip.css';

export default class Tooltip extends PureComponent {
  render () {
    const { hoveredCharts, active } = this.props;

    if (hoveredCharts && active) {
      const { name, billedTime, billedAmount, unbilledTime, unbilledAmount } = hoveredCharts;

      const date = moment(name, 'MM-DD-YYYY');
      const unbilledTimeFormatted = this._getFormattedTime(unbilledTime);
      const billedTimeFormatted = this._getFormattedTime(billedTime);
      const billedAmountFormatted = this._getFormattedAmount(billedAmount);
      const unbilledAmountFormatted = this._getFormattedAmount(unbilledAmount);

      const label = date.format('ddd, MMM DD');

      return (
        <div className={ styles['custom-tooltip'] }>
          <p className={ styles['label'] }>{`${label}`}</p>
          <div className={ styles['data-conatiner'] }>
            <div className={ styles['labels-container'] }>
              <span>Billed</span>
              <span>Unbilled</span>
              <span>Billed Amount</span>
              <span>Unbilled Amount</span>
            </div>
            <div className={ styles['values-container'] }>
              <span>{billedTimeFormatted}</span>
              <span>{unbilledTimeFormatted}</span>
              <span>{billedAmountFormatted}</span>
              <span>{unbilledAmountFormatted}</span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  }

  _getFormattedTime (time) {
    return moment().startOf('day').seconds(time).format('H:mm:ss');
  }

  _getFormattedAmount (amount) {
    return `$${amount.toLocaleString('en')}`;
  }
};
