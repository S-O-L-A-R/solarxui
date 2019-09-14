import React, { ReactNode, ChangeEvent } from 'react'
import Modal from '../Modal'
import CloseButton from '../CloseButton'
import ImageUpload from '../ImageUpload'
import { CloseContainer } from '../ImageModal/styled'

interface Props {
	onClose?: () => void
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	isOpen: boolean
	children: ReactNode
	image: string | null
}

export default function ImageUploadModal({
	onClose,
	onChange,
	isOpen,
	children,
	image,
}: Props) {
	return (
		<Modal onClose={onClose} isOpen={isOpen}>
			<div>
				<CloseContainer>
					<CloseButton onClick={onClose} />
				</CloseContainer>
				<ImageUpload onChange={onChange} image={image} />
			</div>
			{children}
		</Modal>
	)
}
