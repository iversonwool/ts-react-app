import About from "../pages/About"
import Home from "../pages/Home"
import {Navigate} from 'react-router-dom'
import Message from "../pages/Message"
import SuspenseDemo from "../pages/SuspenseDemo"

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
  },
  {
    path: 'suspense',
    element: <SuspenseDemo />
  },
  {
    path: '/',
    element: <Navigate to="home" />
  }
]

export default routes