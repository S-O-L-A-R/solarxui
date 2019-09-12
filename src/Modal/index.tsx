import React, { ReactNode } from 'react'
import { useSpring } from 'react-spring'
import { ModalContainer, Overlay } from './styled'

export interface Props {
	isOpen?: boolean
	onClose?: () => void
	children: ReactNode | string
}

const showStyle = 'translateY(0%)'
const hideStyle = 'translateY(120%)'

const Modal = ({ isOpen, onClose, children }: Props) => {
	const overlayAnimStyle = useSpring({ opacity: isOpen ? 1 : 0 })
	const modalAnimStyle = useSpring({
		transform: isOpen ? showStyle : hideStyle,
	})
	return (
		<>
			{isOpen && <Overlay onClick={onClose} />}
			<ModalContainer style={modalAnimStyle}>{children}</ModalContainer>
		</>
	)
}

export default Modal
