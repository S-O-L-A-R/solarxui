import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Gap from '.'

storiesOf('Gap', module).add('Gap', () => {
	const type = select(
		'type',
		['vertical', 'horizontal', 'grid'],
		'horizontal',
	) as 'vertical' | 'horizontal' | 'grid'
	return (
		<Gap size={text('size', '16px')} type={type}>
			<div>あ</div>
			<div>い</div>
			<div>う</div>
			<div>え</div>
			<div>お</div>
			<div>ア</div>
			<div>イ</div>
			<div>ウ</div>
			<div>エ</div>
			<div>オ</div>
		</Gap>
	)
})
