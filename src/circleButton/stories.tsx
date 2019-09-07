import React from 'react'
import { storiesOf } from '@storybook/react'
import CircleButton from '.'

storiesOf('Circle Button', module).add('Circle Button', () => (
	<div>
		<CircleButton children={'H'} />
	</div>
))
