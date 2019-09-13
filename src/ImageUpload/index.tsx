import React, { ChangeEvent } from 'react'
import { StyledImageUpload, StyledImageInput, StyledImage } from './styled'

interface Props {
	image: string | null
	text?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function ImageUpload({ image, text, onChange }: Props) {
	const input = React.createRef<HTMLInputElement>()

	const onSelectFile = () => {
		input.current!.click()
	}

	return (
		<StyledImageUpload onClick={onSelectFile}>
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
