import React,{useState,useEffect,useRef} from "react";
import { ModalButton,ModalWrapper,ModalOverlay,ModalInner} from './_style';

const Modal = ({ 
    className,
    children,
 }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
      setModalVisible(true)
    }
    const closeModal = () => {
      setModalVisible(false)
    }

  return (
    <>
    <ModalButton onClick={openModal} className="button">제품명</ModalButton>
      {
        modalVisible && 
        <>
        <ModalOverlay visible={modalVisible}/>
        <ModalWrapper
          className={className}
          tabIndex="-1"
          visible={modalVisible}
          onClick={closeModal}
        >
          <ModalInner tabIndex="0" className="modal-inner">
            {children}
          </ModalInner>
        </ModalWrapper>
        </>
      }
    </>
  )
}

export default Modal