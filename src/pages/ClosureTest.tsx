import React from 'react'

function ClosureTest(props: {onChange: (e: string) => void}) {
  const {onChange: originChange} = props
  // 如果使用了useCallback 但是没有正确指定依赖，可能造成“闭包陷进”，即不更新的bug
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    originChange(e.target.value)
  }, [])
  return (
    <div style={{border: '1px solid #456', padding: 15}}>ClosureTest


      <input onChange={onChange} />
    </div>
  )
}

export default ClosureTest