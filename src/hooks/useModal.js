import React from "react";
import { Modal } from "antd";

export default function useModal() {
  const modalRef = React.useRef();

  function open() {
    modalRef.current.open();
    return () => modalRef.current.close();
  }

  const ModalWrapper = React.forwardRef(function (props, ref) {
    const [openStatus, setOpenStatus] = React.useState(false);
    React.useImperativeHandle(ref, () => ({
      open,
    }));
    function open() {
      setOpenStatus(true);
    }
    function close() {
      setOpenStatus(false);
    }
    const { children, ...restProps } = props;
    return (
      <Modal
        title="Hello Modal"
        width={500}
        onCancel={close}
        visible={openStatus}
        {...restProps}
      >
        {children}
      </Modal>
    );
  });

  return {
    open,
    // close
    ModalWrapper: (props) => {
      console.log('--++--')
      return <ModalWrapper {...props} ref={modalRef} />;
    },
  };
}
