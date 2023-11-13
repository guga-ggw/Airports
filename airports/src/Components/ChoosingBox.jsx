import React from 'react'
import plane from '../assets/small-plane.png'
import dollar from '../assets/dollar.png'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router'

function ChoosingBox({ type }) {
  const country = useSelector((state) => state.countries.currentCountry)
  const navigate = useNavigate()

  return (
    country !== undefined ? (
      <motion.div id='option_box' initial={{y : -100, opacity : 0}} animate={{y : 0, opacity : 1}} transition={{delay : .8, duration : 2}}>
        <motion.h1 initial={{opacity : 0, x : -40}} animate={{opacity : 1, x : 0}} transition={{duration : .6, delay : 2}}>{type === 'currency' ? `exchange Currency of ${country}` : `see every Airports of ${country}`}</motion.h1>
        <motion.img initial={{x : -800, opacity : 0, y : 100}} animate={{opacity : 1, x : 0, y : 0}} transition={{type: "spring", delay : 2, duration : 2.2, ease : "easeIn"}} id={type === 'currency' ? 'dollar_img' : "plane_img"} src={type === 'currency' ? dollar : plane} alt="" />
        <motion.button initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 1.8, duration : 1}} onClick={type == "airports" ? () => navigate('/airports') : ""}>{type === 'currency' ? `exchange` : `see Airports` }</motion.button>
      </motion.div>
    ) : null
  )
}

export default ChoosingBox