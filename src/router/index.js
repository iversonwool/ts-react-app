import About from "../pages/About"
import Home from "../pages/Home"
import {Navigate} from 'react-router-dom'
import Message from "../pages/Message"

const routes = [
  {
    path:'/home',
    element: <Home />,
    children: [
      {
        path: 'message',
        element: <Message />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
  ,
  {
    path: '/',
    element: <Navigate to="home" />
  }
]

export default routes