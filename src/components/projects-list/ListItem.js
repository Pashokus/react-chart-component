import React, { PureComponent } from 'react';
import ListItemSection from './ListItemSection';
import getStatusComp from './StatusValue';
import { getFormattedAmount } from '../../helpers/amountFormatter';
import { timeParser } from '../../helpers/dateTimeFormatter';
import styles from './list-item.css';

export default class ListItem extends PureComponent {
  render () {
    const { item } = this.props;
    const properties = Object.keys(item);
    const formattedItem = this.formatItem(item);

    return (
      <li className={ styles['projects-list-item'] }>
        {properties.map(property => this.buildSection(property, formattedItem[property]))}
        <div className={ styles['more-button'] } />
      </li>
    );
  };

  buildSection (property, value) {
    return (
      <ListItemSection
        property={ property }
        key={ property }
        value={ value }
        render={ property === 'status' ? getStatusComp(value) : '' } />
    );
  }

  formatItem (item) {
    const { time, amount } = item;

    return Object.assign({}, item, {
      time: timeParser(time),
      amount: getFormattedAmount(amount)
    });
  }
};
