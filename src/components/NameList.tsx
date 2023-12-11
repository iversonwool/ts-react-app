import React from 'react'

function promise(delay: number) {


  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({result: [{name: 'tom'}, {name: 'jack'}, {name: 'jerry'}]})
    }, delay * 1000)
  })
}
export default function NameList() {
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    promise(0).then((resp: any) => {
      setList(resp.result)
    })
  }, [])

  return (
    <ol>
      {list.map((item: any, index) => {
        return <li key={index}>{item.name}</li>
      })}
    </ol>
  )
}