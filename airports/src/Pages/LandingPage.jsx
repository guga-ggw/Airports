import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setcountries } from '../store/countries/countries.slice';
import { useGetDataQuery } from '../store/countries/countries.api';
import {motion} from 'framer-motion'
import plane from '../assets/plane.png'

function LandingPage() {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetDataQuery();
  const [showdata, setshowdata] = useState(false)
  const countrycontref = useRef()
  const chooseCountry = async () => {

    const changest = async () => {
        setshowdata(true)
        return true
    }
    const res = await changest()
    res ? countrycontref.current?.scrollIntoView({behavior : "smooth"}) : ""
  }


  console.log(isLoading)
  console.log(data);

  return (<div className='LandingPage'>
    <motion.div className="choose_location">
        <motion.img initial={{x : 200, scale : 0.6, y : -100}} animate={{x : -240, scale : 1.6, y :0}} transition={{duration : 1, delay : .4}} src={plane} alt="" />
        <motion.h1 initial={{ opacity : 0, y : -100}} animate={{scale : 1, opacity : 1}} transition={{delay : 1, duration : 1, ease : "easeIn"}} >
            Choose Country
        </motion.h1>
        <div className="landing_button_box">
            <motion.button  initial={{ opacity : 0 }} animate={{scale : 1, opacity : 1, y :0}} transition={{delay : 1.3, duration : 1.4, ease : "easeIn"}} onClick={() => chooseCountry()}>Choose Country</motion.button>
            <motion.button  initial={{ opacity : 0}} animate={{scale : 1, opacity : 1, y :0}} transition={{delay : 1.5, duration : 1.4, ease : "easeIn"}}>Automatic Choose</motion.button>

        </div>
    </motion.div>
    <>
    
    {showdata && (
        <>
        <h1 id='countries_txt' ref={countrycontref}>Choose Country</h1>
        <div className="country_list">
    {data?.map((item) => (
        <motion.div
        whileHover={{ scale: 1.1, transition: { scale: { delay: 0.1, duration: 0.2,  } } }}
        id='country_box'
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.02 * data.indexOf(item) }}
      >
        <div className="layout">
        <h5>{item.name.common}</h5>
        <button>Choose</button>
        </div>
            <img src={item.flags.svg} alt="" />
        </motion.div>
    ))}
  </div> 
        </>
    
  )}  
    </>


    </div>
)} 

export default LandingPage;