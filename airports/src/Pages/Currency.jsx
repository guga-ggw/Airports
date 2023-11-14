import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies } from '../store/currencies/currencies.thunks'


function Currency() {

  const currencies = useSelector((state) => state.currencies.currencies)
  const currentCur = useSelector((state) => state.countries.currentCountry)
  const [fromeuro, setfromeuro] = useState(true)
  const [currentValue, setcurrentValue] = useState()

  const [euroToValue, setEuroToValue] = useState(null)
  const [result, setresult] = useState()
  const [inputValue, setInputValue] = useState()

  useEffect(() => {
    currentCur && setcurrentValue(Object.keys(currentCur.currencies)[0]) 
    if (currentValue && currencies[currentValue] !== euroToValue) {
      setEuroToValue(currencies[currentValue])
    }
  }, [currentValue, currencies, euroToValue])

  const changeCurrency = () => {
    if(fromeuro){
      setresult((Number(inputValue) * euroToValue).toFixed(1))
    }
    else{
      setresult(inputValue / euroToValue)
    }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
  
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');
    setInputValue(numericInputValue);
  };

  return (
    <div className="currency_page">
      <h3>Exchange Value</h3>
      <div className="change_currency">
          <div id="exchanger_box">
              <label htmlFor="">Euro</label>
              <input type="text" onChange={(e) => handleInputChange(e)} />
          </div>
          <div id="exchanger_box">
              <label htmlFor="">{currentValue}</label>
              <input type="text" />
          </div>
          <button onClick={() => changeCurrency()}>Exchange</button>
      </div>
    </div>
  )
}

export default Currency