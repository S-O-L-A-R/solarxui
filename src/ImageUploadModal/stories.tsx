import React, { useState, ChangeEvent } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import ImageUploadModal from '.'

const Wrapper = styled.div`
	padding: 24px;
`

export default function ImageUploadModalStories() {
	const [image, setImage] = useState<File | null>(null)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0])
		}
	}

	return (
		<ImageUploadModal
			image={!!image ? window.URL.createObjectURL(image) : ''}
			isOpen={boolean('isOpen', false)}
			onChange={onChange}
		>
			<Wrapper>{text('children', 'This is very cool modal')}</Wrapper>
		</ImageUploadModal>
	)
}

storiesOf('Image Upload Modal', module).add('Image Upload Modal', () => (
	<ImageUploadModalStories />
))
