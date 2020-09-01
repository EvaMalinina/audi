import React from 'react';
import './card.scss'

export const Card = () => {
  return(
    <div className={'card'}>
      <div className={'container'}>
        <div className={'card__design'}> </div>
        <div className={'card__car'}>
          <div className={'car'}> </div>
        </div>
        <div className={'card__info'}>
          <div className={'info__main'}>
            <div className={'info__main-title'}>
              <div className={'title'}> 
                <div className={'title__front'}></div>
                <div className={'title__back'}>
                </div>
              </div>
              <span>2.OT Quattro<br/>Premium</span>
            </div>
            <ul className={'info__main-list list'}>
              <li className={'list__item'}>
                <h4>everyone qualifies</h4>
                <p className={'list__item-price'}>
                  $<span>499</span> 39 Mo.Lease
                </p>
                <p className={'list__item-details'}>$3,500 Due at Signing | SO Security Deposit</p>
              </li>
              <li className={'list__item'}>
                <h4>current audi owners</h4>
                <p className={'list__item-price'}>
                  $ <span>479</span> Mo.Lease
                </p>
                <p className={'list__item-details'}>$3,500 Due at Signing</p>
              </li>
            </ul>
          </div>
          <div className={'info__add'}>
            <p>MSRP: $47,450. 10K mi/yr. lease excludes tax, title, and plate free. For qualified customers though
              Audi Financial Services. Vehicle image shown for illustrative purposes only. #WC2776. Offer ends 09/03/19
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
