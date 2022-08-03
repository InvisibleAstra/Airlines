import React from 'react';
import './ticketsCard.component.scss'
import BuyButtonComponent from './buyButton/buyButton.component';

const TicketsCardComponent = () => {
  return (
    <div className={'card'}>
      <div className={'card_leftSide'}>
        <img src={'/airlinesLogo.png'} alt={''}/>
        <BuyButtonComponent/>
      </div>
      <div className={'card_rightSide'}></div>
    </div>
  );
};

export default TicketsCardComponent;
