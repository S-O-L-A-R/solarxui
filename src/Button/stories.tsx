import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import { select, text, boolean } from '@storybook/addon-knobs'

storiesOf('Button', module).add('Button', () => (
	<div>
		<Button
			children={text('children', 'Button')}
			className={select(
				'className',
				{
					large: 'large',
					small: 'small',
					'': '',
				},
				'',
			)}
			disabled={boolean('Disabled', false)}
		/>
	</div>
))
