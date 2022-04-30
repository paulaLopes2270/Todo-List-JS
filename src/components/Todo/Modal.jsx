import { useEffect } from "react"
import styled from "styled-components"

const ModalSection = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: 0.3s;
`
const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
const ModalCard = styled.div`
  position: relative;
  padding: 20px;
  background: white;
  transform: translateY(${({ isShow }) => (isShow ? "none" : "50%")});
  visibility: ${({ isShow }) => (isShow ? "visible" : "hidden")};
  h3,
  p {
    text-align: center;
  }
  transition: transform 0.5s, visibility 0.3s;
`
const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`

export const Modal = ({
  isShow = false,
  hiddenModal = () => {},
  messageData = { title: "Titulo", message: "Mensagem do modal" }
}) => {
  const handleKeyDown = (event) => {
    console.log(event)
  }
  useEffect(() => {
    const hidden = () =>
      setTimeout(() => {
        hiddenModal()
      }, 3000)
    if (isShow) {
      hidden()
    } else {
      clearInterval(hidden)
    }
  }, [isShow, hiddenModal])
  const { title, message } = messageData

  return (
    <ModalSection isShow={isShow} onKeyDown={handleKeyDown}>
      <ModalBackground onClick={hiddenModal} />
      <ModalCard isShow={isShow}>
        <CloseButton onClick={hiddenModal} />
        <h3>{title}</h3>
        <p>{message}</p>
      </ModalCard>
    </ModalSection>
  )
}
