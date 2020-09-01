import React from 'react';
import './forms.scss' 
import { Contacts } from '../../components/contact/index'
import { CarFilter } from '../../components/car-filter/index'

export const Forms = () => {
  return(
    <div style={{position: 'relative', marginBottom: '214px', paddingTop: '125px'}}>
      <div className={'forms-container'}>
        <Contacts/>
        <CarFilter/>
      </div>
    </div>
  )
}
