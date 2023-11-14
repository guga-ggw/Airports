import React from 'react'
import LandingPage from '../Pages/LandingPage'
import ChoosePage from '../Pages/ChoosePage'
import Airports from '../Pages/Airports'
import Currency from '../Pages/Currency'

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
    },
    {
        element : <Currency/>,
        path : "exchange"
    }
]

export default router