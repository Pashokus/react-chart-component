import React, { PureComponent } from 'react';
import ListItemSection from './ListItemSection';
import getStatusComp from './StatusValue';
import { getFormattedAmount } from '../../helpers/amountFormatter';
import { timeParser } from '../../helpers/dateTimeFormatter';
import styles from './list-item.css';

const leftSection = ['date', 'time', 'project'];
const rightSection = ['amount', 'status'];

export default class ListItem extends PureComponent {
  render () {
    const { item } = this.props;
    const formattedItem = this.formatItem(item);

    return (
      <li className={ styles['projects-list-item'] }>
        <div className={ styles['projects-list-item-container'] }>
          <div className={ styles['left-container'] }>
            {leftSection.map(label => this.buildSection(label, formattedItem[label]))}
          </div>
          <div className={ styles['right-container'] }>
            {rightSection.map(label => this.buildSection(label, formattedItem[label]))}
            <div className={ styles['more-button'] } />
          </div>
        </div>
      </li>
    );
  };

  buildSection (label, value) {
    return (
      <ListItemSection
        label={ label }
        value={ value }
        render={ label === 'status' ? getStatusComp(value) : '' } />
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
