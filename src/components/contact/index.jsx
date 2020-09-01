import React, { useState }  from 'react';
import './contact.scss';

export const Contacts = () => {

  const [ name, setName] = useState(true)
  const [ lastName, setLastName] = useState(true)
  const [ email, setEmail] = useState(true)
  const [ , setPhone] = useState('')
  const [  selectedOption, setSelectedOption ] = useState(false)

  const declareName = () => {
    setName(false)
  }

  const declareLastName = () => {
    setLastName(false)
  }

  const declareEmail = () => {
    setEmail(false)
  }

  const declarePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleChange = (e) => {
    setSelectedOption(!selectedOption)
  }

  return(
    <div className={'contacts'}>
      <h5 className={'contacts__header'}>contacts info</h5>
      <p>We appreciate your interest in our inventory,and apologize we do not have model detailsdisplaying on the website at this time.</p>
      <p>Please fill the form out below and ourteam will quickly respond, or, please call usat 765-470-4091 for more information.</p>

      <div className={'contacts__form'}>
        <form className={'form'}>
          <label onClick={declareName}>
            <input type="text" required/>
            { !name ?
              '' :
              <span className="placeholder">First name</span>
            }
          </label>

          <label onClick={declareLastName}>
            <input type="text" required/>
            { !lastName ?
              '' :
              <span className="placeholder">Last name</span>
            }
          </label>

          <label onClick={declareEmail}>
            <input type="email" required/>
            { !email ?
              '' :
              <span className="placeholder">E-mail</span>
            }
          </label>

          <input type="phone" name="phone" placeholder="Phone" onChange={declarePhone} />

          <div className={'form__radio'}>
            <label className="radio__label">
              <input
                type="radio"
                name="prefer-email"
                className="radio__input"
                value="prefer-email"
                onChange={handleChange}
                checked={selectedOption}
              />
                <span className="radio__input-fake"></span>
                <span className="radio__label-text">Prefer E-mail</span>
            </label>
            <label className="radio__label">
              <input
                type="radio"
                name="prefer-phone"
                className="radio__input"
                value="prefer-phone"
                onChange={handleChange}
                checked={!selectedOption}
              />
                <span className="radio__input-fake"></span>
                <span className="radio__label-text">Prefer phone</span>
            </label>
          </div>

          <div className={'form__btn'}>
            <div className={'btn__bg'}></div>
            <button className={'btn'} type="submit" value="contact us">contact us</button>
          </div>
        </form>
      </div>
    </div>
  )
}
