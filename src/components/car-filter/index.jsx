import React from 'react';
import './car-filter.scss'

export const CarFilter = () => {

  return(
    <div className={'car-filter'}>
      <div className={'container container_column'}>
        <h3 className={'car-filter__header'}>can't find what you looking for?</h3>
        <div className={'car-filter__form'}>
          <form className={'form'}>

            <div className={'select-box'}>
              <div className={'select-box__current'} tabIndex='1'>
                <div className={'select-box__value'}><input className={'select-box__input'} type='radio' id='0' value='1' name='Ben' checked={true} readOnly/>
                  <p className={'select-box__input-text'}>Any-type New or Pre-owned</p>
                </div>
                <div className={'select-box__value'}><input className={'select-box__input'} type='radio' id='1' value='2' name='Ben' checked={true} readOnly/>
                  <p className={'select-box__input-text'}>New</p>
                </div>
                <div className={'select-box__value'}><input className={'select-box__input'} type='radio' id='2' value='3' name='Ben' checked={true} readOnly/>
                  <p className={'select-box__input-text'}>Pre-owned</p>
                </div>
                <div className={'select-box__icon'} aria-hidden='true'></div>
              </div>
              <ul className={'select-box__list'}>
                <li><label className={'select-box__option'} htmlFor='0' aria-hidden='aria-hidden'>Any-type New or Pre-owned</label></li>
                <li><label className={'select-box__option'} htmlFor='1' aria-hidden='aria-hidden'>New</label></li>
                <li><label className={'select-box__option'} htmlFor='2' aria-hidden='aria-hidden'>Pre-owned</label></li>
              </ul>
            </div>

            <textarea className={'message'} placeholder={'Your message'}></textarea>

            <div className={'form__btn'}>
              <div className={'btn__bg'}></div>
              <button className={'btn'} type='submit' value='let-us-find'>let us find it</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
