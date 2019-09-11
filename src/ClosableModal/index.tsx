import React from 'react'
import Modal, { Props } from '../Modal'
import CloseButton from '../CloseButton'
import { CloseContainer } from './styled'

const ClosableModal = ({ isOpen, onClose, children }: Props) => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<CloseContainer>
			<CloseButton onClick={onClose} />
		</CloseContainer>
		{children}
	</Modal>
)

export default ClosableModal
