
import React from 'react'
import {useParams, Link, Outlet} from 'react-router-dom'

export default function Home(props) {
  console.log('Home', props)
  console.log('home params', useParams())
  return (
    <div>Home


      <Link to="message">Message</Link>

      <Outlet />
    </div>
  )
}

