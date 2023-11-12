import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcountries, setcurrent } from '../store/countries/countries.slice';
import { useGetDataQuery } from '../store/countries/countries.api';
import {motion} from 'framer-motion'
import plane from '../assets/plane.png'
import { getAirports } from '../store/airports/airports.thunks';
import { useNavigate } from 'react-router'

function LandingPage() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetDataQuery();
  const [showdata, setshowdata] = useState(false)
  const countrycontref = useRef()
  const navigate = useNavigate()

  const chooseCountry = async () => {
    const changest = async () => {
        setshowdata(true)
        return true
    }
    const res = await changest()
    res ? countrycontref.current?.scrollIntoView({behavior : "smooth"}) : ""
  }


  const choosenInfo = async (item) => {
    dispatch(getAirports(item.altSpellings[0]))
    dispatch(setcurrent(item.altSpellings[1]))
    navigate('choose')
  }

  const autoinfo = async () => {
    try {
      const getsuc = window.alert('let webpage know your location')
      const response = await fetch('https://api.ipify.org')
      const data = await response.text()
      const res = await fetch(`http://ip-api.com/json/${data}`)
      const geo = await res.json()
      dispatch(getAirports(geo.countryCode))
      dispatch(setcurrent(geo.country))
      navigate('choose')
    } catch (error) {
      
    }
  }



  return (<div className='LandingPage'>
    <motion.div className="choose_location">
        <motion.img initial={{x : 200, scale : 0.6, y : -100}} animate={{x : -240, scale : 1.6, y :0}} transition={{duration : 1, delay : .4}} src={plane} alt="" />
        <motion.h1 initial={{ opacity : 0, y : -100}} animate={{scale : 1, opacity : 1}} transition={{delay : 1, duration : 1, ease : "easeIn"}} >
            Choose Country
        </motion.h1>
        <div className="landing_button_box">
            <motion.button  initial={{ opacity : 0 }} animate={{scale : 1, opacity : 1, y :0}} transition={{delay : 1.3, duration : 1.4, ease : "easeIn"}} onClick={() => chooseCountry()}>Choose Country</motion.button>
            <motion.button  initial={{ opacity : 0}} animate={{scale : 1, opacity : 1, y :0}} transition={{delay : 1.5, duration : 1.4, ease : "easeIn"}} onClick={() => autoinfo()} >Automatic Choose</motion.button>

        </div>
    </motion.div>
    <>
    
    {showdata && (
        <>
        <h1 id='countries_txt' ref={countrycontref}>Choose Country</h1>
        <div className="country_list">
    {data?.map((item) => (
        <motion.div
        key={item.altSpellings[0]}
        whileHover={{ scale: 1.1, transition: { scale: { delay: 0.1, duration: 0.2,  } } }}
        id='country_box'
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.008 * data.indexOf(item) }}
      >
        <div className="layout">
        <h5>{item.name.common}</h5>
        <button onClick={() => choosenInfo(item)}>Choose</button>
        </div>
            <img src={item.flags.png} alt="" />
        </motion.div>
    ))}
  </div> 
        </>
    
  )}  
    </>


    </div>
)} 

export default LandingPage;