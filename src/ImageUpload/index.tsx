import React, { ChangeEvent, useState, useCallback } from 'react'
import styled from 'styled-components'
import { gray } from '../colors'

const StyledImageUpload = styled.div`
	color: #989898;
	background-color: ${gray[1]};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	height: 210px;
`

const StyledImageInput = styled.input`
	display: none;
`

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`

interface Props {
	image: string | null
	text: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function ImageUpload(props: Props) {
	const input = React.createRef<HTMLInputElement>()

	const onSelectFile = () => {
		input.current!.click()
	}

	return (
		<StyledImageUpload onClick={onSelectFile}>
			{props.image ? <StyledImage src={props.image} alt="" /> : props.text}
			<StyledImageInput
				type="file"
				accept="image/*"
				ref={input}
				onChange={props.onChange}
			/>
		</StyledImageUpload>
	)
}

ImageUpload.defaultProps = {
	text: 'Upload Photo',
}

export default ImageUpload
