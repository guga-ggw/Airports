import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './router/router'

function App() {

  return (
      <RouterProvider router={createBrowserRouter(router)}/>
  )
}

export default App
