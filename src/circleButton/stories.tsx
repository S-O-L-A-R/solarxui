import React from 'react'
import { storiesOf } from '@storybook/react'
import CircleButton from '.'
import { number } from '@storybook/addon-knobs'

storiesOf('Circle Button', module).add('Circle Button', () => (
	<div>
		<CircleButton children={'H'} size={number('size', 32)} />
	</div>
))
