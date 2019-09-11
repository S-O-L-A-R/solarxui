import React from 'react'
import Modal, { Props as ModalProps } from '../Modal'
import CloseButton from '../CloseButton'
import { Thumbnail, CloseContainer } from './styled'

export interface Props extends ModalProps {
	src: string
}

const ImageModal = ({ src, onClose, isOpen, children }: Props) => (
	<Modal onClose={onClose} isOpen={isOpen}>
		<Thumbnail src={src}>
			<CloseContainer>
				<CloseButton onClick={onClose} />
			</CloseContainer>
		</Thumbnail>
		{children}
	</Modal>
)

export default ImageModal
