import React from "react";
import {Button, Modal} from 'antd'
import useModal from "../../hooks/useModal";
import TestForm from "../../hooks/TestForm";

export default function Message() {
  const [visible, setVisible] = React.useState(false)
  const {open, ModalWrapper} = useModal()
  function onClick() {
    open()
    // setVisible(true)
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


      {/* <Modal title="xxxxx" width={520} visible={visible} onCancel={()=> setVisible(false)} /> */}
    </div>
  );
}
