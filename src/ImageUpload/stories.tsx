import React, { ChangeEvent, useState } from 'react'
import { storiesOf } from '@storybook/react'
import ImageUpload from '.'
import { text } from '@storybook/addon-knobs'

export default function ImageUploadStories() {
	const [image, setImage] = useState<File | null>(null)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setImage(e.target.files![0])
	}

	return (
		<div style={{ borderRadius: '16px 16px 0 0', overflow: 'hidden' }}>
			<ImageUpload
				image={!!image ? window.URL.createObjectURL(image) : ''}
				text={text('text', 'Upload Menu Image')}
				onChange={onChange}
			/>
		</div>
	)
}

storiesOf('Image Upload', module).add('Image Upload', () => (
	<ImageUploadStories />
))
