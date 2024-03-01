import React from "react";
import {Button, Modal} from 'antd'
import useModal from "../../hooks/useModal";
import TestForm from "../../hooks/TestForm";
import ClosureTest from "../ClosureTest";

export default function Message() {
  const [visible, setVisible] = React.useState(false)
  const {open, ModalWrapper} = useModal()
  function onClick() {
    // open()
    setVisible(true)
  }

  const closureTestClick= () => {
    
  }
  const onChange = (s) => {
    console.log('visible =>', visible)
    console.log('s =>', s)
  }
  return (
    <div>
      Message
      <br />
      <Button type="primary" onClick={onClick}>
        Clic Me!
      </Button>

      <ModalWrapper title="Modal Wrapper">
        <TestForm />
      </ModalWrapper>

      <Button onClick={closureTestClick}></Button>
      <ClosureTest onChange={onChange} />
      <div>visible 的值是<span style={{color: 'red'}}>{`${visible}`}</span></div>
      <div>记得打开控制台看 visible值的变化</div>
      {/* <Modal title="xxxxx" width={520} visible={visible} onCancel={()=> setVisible(false)} /> */}
    </div>
  );
}
