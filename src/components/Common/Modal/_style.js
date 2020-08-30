import styled from 'styled-components'


export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100001;
  overflow: auto;
  outline: 0;
`

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100000;
`

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 400px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`


export const ModalButton = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 8px;
    font-weight: bold;
    text-transform: uppercase;
    background: #000;
    border: 2px solid;
    cursor: pointer;
    z-index:3;
    &:hover {
        color: #000;
        background: #fff;
        border-color: #fff;
    }  
`