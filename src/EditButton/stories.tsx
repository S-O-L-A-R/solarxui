import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import EditButton from '.'

storiesOf('EditButton', module).add('EditButton', () => (
	<EditButton
		className={text('className', '')}
		size={number('size', EditButton.defaultProps.size)}
	/>
))
