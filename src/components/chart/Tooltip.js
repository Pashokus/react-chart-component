import React from 'react';
import moment from 'moment';
import styles from './tooltip.css';
import { timeParser } from '../../helpers/dateTimeFormatter';
import { getFormattedAmount } from '../../helpers/amountFormatter';

export default (props) => {
  const { active } = props;

  if (active) {
    const { payload } = props;
    const { name, billedTime, billedAmount, unbilledTime, unbilledAmount } = payload[0].payload;

    const date = moment(name, 'MM-DD-YYYY');
    const unbilledTimeFormatted = timeParser(unbilledTime);
    const billedTimeFormatted = timeParser(billedTime);
    const billedAmountFormatted = getFormattedAmount(billedAmount);
    const unbilledAmountFormatted = getFormattedAmount(unbilledAmount);

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
};
