import React from 'react'
import './index.css'

const NameList = React.lazy(() => delayForDemo(import('../components/NameList')))

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

function SuspenseDemo() {
  
  return (
    <div className='demo-container'>

      <React.Suspense fallback={<h2>Loading</h2>}>
        <NameList />
      </React.Suspense>
    </div>
  )
}

export default SuspenseDemo


