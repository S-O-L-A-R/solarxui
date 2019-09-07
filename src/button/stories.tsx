import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import { select, text } from '@storybook/addon-knobs'

storiesOf('Button', module).add('Button', () => (
	<div>
		<Button
			children={text('asdasd', 'Button')}
			className={select(
				'className',
				{
					large: 'large',
					small: 'small',
					'': '',
				},
				'',
			)}
		/>
	</div>
))
