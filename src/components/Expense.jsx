import React from 'react';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { dateFormatter } from '../helpers';

import SaveIcon from '../img/save_icon.svg';
import FoodIcon from '../img/food_icon.svg';
import ExpenseIcon from '../img/Expense_icon.svg';
import EntertainamentIcon from '../img/Entertainament_icon.svg';
import HomeIcon from '../img/House_icon.svg';
import StreamingIcon from '../img/streaming_icon.svg';
import HealthIcon from '../img/health_icon.svg';
import TransportIcon from '../img/transport_icon.svg';

const iconList = {
  savings: SaveIcon,
  food: FoodIcon,
  home: HomeIcon,
  transportation: TransportIcon,
  entertainament: EntertainamentIcon,
  health: HealthIcon,
  streaming: StreamingIcon,
  others: ExpenseIcon,
};

const Expense = ({ expense }) => {
  const { name, quantity, category, date } = expense;
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => console.log('editar')}>Edit</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log('delete')}>Delete</SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          <div className="expense-content">
            <img src={iconList[category]} alt="" />
            <div className="expense-description">
              <p className="category">{category}</p>
              <p className="expense-name">{name}</p>
              <p className="expense-date">
                Added on: {''}
                <span>{dateFormatter(date)}</span>
              </p>
            </div>
          </div>
          <div className="expense-quantity">
            <p>${quantity}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
