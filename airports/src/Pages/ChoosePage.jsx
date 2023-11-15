import React from 'react'
import ChoosingBox from '../Components/ChoosingBox'
import { useSelector } from 'react-redux'
import ErrorPage from '../Components/ErrorPage'
import { useNavigate } from 'react-router'
import {motion} from 'framer-motion'

function ChoosePage() {
  const country = useSelector((state) => state.countries.currentCountry)
  const navigate = useNavigate()
  console.log(country)

  return (
    <div id='ChoosePage'>
      <motion.h2 initial={{opacity : 0, y : -100}} animate={{y : 0, opacity : 1}} transition={{delay : .2, duration : 1.5}} onClick={() => navigate('/')} id='Goback'><i className="fa-solid fa-caret-left"></i> Go Back</motion.h2 >
      {country !== "" && country !== undefined ?  (<>
      <ChoosingBox type = {'currency'}/>
      <ChoosingBox type ={"airports"}/>
      </>) : <ErrorPage/>}
    </div>
  )
}

export default ChoosePage