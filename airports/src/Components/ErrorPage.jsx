import React from 'react'
import { useNavigate } from 'react-router'
import {motion} from "framer-motion"

function ErrorPage() {

    const navigate = useNavigate()
  return (
    <div id='Error_Page'>
        <motion.h1 initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : .5, duration : 1}}>Sorry, We do Not have Data About Country you chose</motion.h1>
        <motion.button initial={{scale : 0, opacity : 0}} animate={{scale :1, opacity :1 }} transition={{delay : 1, duration : 1.4}} onClick={() => navigate('/') }>Go Back</motion.button>
    </div>
  )
}

export default ErrorPage