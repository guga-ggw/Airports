import React from 'react'
import LandingPage from '../Pages/LandingPage'
import ChoosePage from '../Pages/ChoosePage'
import Airports from '../Pages/Airports'

const router = [
    {
        element : <LandingPage/>,
        path : ''
    },
    {
        element : <ChoosePage/>,
        path : "choose"
    },
    {
        element : <Airports/>,
        path : "airports"
    }
]

export default router