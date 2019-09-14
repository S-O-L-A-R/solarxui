import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'
import CircleButton from '.'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import UndoButton from './UndoButton'
import MinusButton from './MinusButton'
import PlusButton from './PlusButton'

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

storiesOf('CircleButton', module).add('PlusButton', () => (
	<PlusButton
		className={text('className', '')}
		size={number('size', PlusButton.defaultProps.size)}
	/>
))

storiesOf('CircleButton', module).add('MinusButton', () => (
	<MinusButton
		className={text('className', '')}
		size={number('size', MinusButton.defaultProps.size)}
	/>
))
