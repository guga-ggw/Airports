import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrencies } from '../store/currencies/currencies.thunks'
import ErrorPage from '../Components/ErrorPage'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'


function Currency() {
  const navigate = useNavigate()
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
      setresult((Number(inputValue) / euroToValue).toFixed(1))
    }
  }

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
  
    const numericInputValue = inputValue.replace(/[^0-9]/g, '');
    setInputValue(numericInputValue);
  };

  const changeType = () => {
    setfromeuro(!fromeuro)
    setresult(null)
  }


  return (
    <motion.div className="currency_page">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }}
        onClick={() => navigate('/choose')}
        id="Goback"
      >
        <i className="fa-solid fa-caret-left"></i> Go Back
      </motion.h2>
      {currentValue === undefined ? (
        <ErrorPage type="currency" />
      ) : (
        <motion.div
          className="change_currency"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.div className="currency_header">
            <motion.h2>Exchange</motion.h2>
          </motion.div>
          <motion.div
            className="exchanger_container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              id="exchanger_box"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.label htmlFor="">Amount</motion.label>
              <motion.input
                type="text"
                defaultValue={1}
                onChange={(e) => handleInputChange(e)}
                value={inputValue}
              />
            </motion.div>
            {fromeuro  ? (
              <>
                <motion.div
                  id="exchanger_box"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.label htmlFor="">From</motion.label>
                  <motion.div
                    id="from_ex"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.h4>Euro</motion.h4>
                  </motion.div>
                </motion.div>
                <motion.i
                  className="fa-solid fa-right-left"
                  onClick={() => changeType()}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.i>
                <motion.div
                  id="exchanger_box"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.label htmlFor="">to</motion.label>
                  <motion.div
                    id="toex"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4>{currentValue}</h4>
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  id="exchanger_box"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.label htmlFor="">From</motion.label>
                  <motion.div
                    id="toex"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4>{currentValue}</h4>
                  </motion.div>
                </motion.div>
                <motion.i
                  className="fa-solid fa-right-left"
                  onClick={() => changeType()}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                ></motion.i>
                <motion.div
                  id="exchanger_box"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.label htmlFor="">to</motion.label>
                  <motion.div
                    id="from_ex"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4>Euro</h4>
                  </motion.div>
                </motion.div>
              </>
            )}
            <motion.button
              onClick={() => changeCurrency()}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Exchange
            </motion.button>
          </motion.div>
          <motion.h1
            id="Result_txt"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {result > 0.00001 ? (fromeuro  ? result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + currentValue : result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "€") : ""}
          </motion.h1>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Currency