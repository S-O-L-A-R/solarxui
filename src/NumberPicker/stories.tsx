import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import NumberPicker from '.'

export default function NumberPickerStories() {
	const [orderNumber, setOrderNumber] = useState(0)

	const onIncrease = () => {
		setOrderNumber(orderNumber + 1)
	}

	const onDecrease = () => {
		if (orderNumber > 0) {
			setOrderNumber(orderNumber - 1)
		}
	}

	return (
		<NumberPicker
			onIncrease={onIncrease}
			onDecrease={onDecrease}
			value={orderNumber}
		/>
	)
}

storiesOf('Number Picker', module).add('Number Picker', () => (
	<NumberPickerStories />
))
