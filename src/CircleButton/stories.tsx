import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import CircleButton from '.'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import UndoButton from './UndoButton'

storiesOf('CircleButton', module).add('CircleButton', () => (
	<CircleButton
		className={text('className', '')}
		size={number('size', CircleButton.defaultProps.size)}
	/>
))

storiesOf('CircleButton', module).add('EditButton', () => (
	<EditButton
		className={text('className', '')}
		size={number('size', EditButton.defaultProps.size)}
	/>
))

storiesOf('CircleButton', module).add('DeleteButton', () => (
	<DeleteButton
		className={text('className', '')}
		size={number('size', DeleteButton.defaultProps.size)}
	/>
))

storiesOf('CircleButton', module).add('UndoButton', () => (
	<UndoButton
		className={text('className', '')}
		size={number('size', UndoButton.defaultProps.size)}
	/>
))
