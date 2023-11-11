import React from 'react'
import LandingPage from '../Pages/LandingPage'
import ChoosePage from '../Pages/ChoosePage'

const router = [
    {
        element : <LandingPage/>,
        path : ''
    },
    {
        element : <ChoosePage/>,
        path : "choose"
    }
]

export default router