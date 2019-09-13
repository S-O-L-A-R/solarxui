import React, { ChangeEvent, createRef } from 'react'
import { StyledImageUpload, StyledImageInput, StyledImage } from './styled'

interface Props {
	image: string | null
	text?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function ImageUpload({ image, text, onChange }: Props) {
	const input = createRef<HTMLInputElement>()

	const onSelectFile = () => {
		if (!!input.current) {
			input.current.click()
		}
	}

	return (
		<StyledImageUpload className="gray2-text gray0-bg" onClick={onSelectFile}>
			{image ? <StyledImage src={image} alt="" /> : text}
			<StyledImageInput
				type="file"
				accept="image/*"
				ref={input}
				onChange={onChange}
			/>
		</StyledImageUpload>
	)
}

ImageUpload.defaultProps = {
	text: 'Upload Photo',
}

export default ImageUpload
