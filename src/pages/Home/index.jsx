
import React, { useDebugValue } from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'


function useCustomHook() {

  const [state, setState] = React.useState(true)
  // useDebugValue(state ? 'Online' : 'Offline')
  return state
}

export default function Home(props) {
  console.log('Home', props)
  console.log('home params', useParams())
  const [toggle, setToggle] = React.useState(false)
  const msg = useCustomHook()
  React.useDebugValue('toggle')
  return (
    <div>
      {toggle ? 'true': 'false'} - Home - {msg}

      <Link to="message">Message</Link>

      <Outlet />
    </div>
  )
}

