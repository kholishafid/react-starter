import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Root from './routes/root'
// import Error from './routes/error'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
