import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import Photo from '.'

storiesOf('Photo', module).add('Photo (Normal)', () => (
	<Photo
		src="https://www.w3schools.com/w3css/img_lights.jpg"
		variant={
			select('variant', ['normal', 'circle'], Photo.defaultProps.variant) as
				| 'normal'
				| 'circle'
		}
		width={number('width', 95)}
		height={number('height', 101)}
		size={number('size', 100)}
	/>
))

storiesOf('Photo', module).add('Photo (Circle)', () => (
	<Photo
		src="https://www.w3schools.com/w3css/img_lights.jpg"
		variant={
			select('variant', ['normal', 'circle'], 'circle') as 'normal' | 'circle'
		}
		size={number('size', 100)}
	/>
))
