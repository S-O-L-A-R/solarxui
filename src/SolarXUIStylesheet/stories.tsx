import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import styled from 'styled-components'

const ColorTesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 250px;
`

storiesOf('Basic Style', module)
	.add('typography', () => (
		<div>
			<div>Default Typography</div>
			<div className="highlight">hightlight class</div>
			<div className="title">title class</div>
			<div className="bold">bold class</div>
			<div className={text('className', '')}>Try it yourself</div>
		</div>
	))
	.add('colors', () => (
		<div>
			<div className="primary-text">primary-text class</div>
			<div className="danger-text">danger-text class</div>
			<div className="gray1-text">gray1-text class</div>
			<div className="gray2-text">gray2-text class</div>
			<div className="primary-bg white-text">white-text class</div>
			<div className="primary-bg">primary-bg class</div>
			<div className="danger-bg">danger-bg class</div>
			<div className="gray1-bg">gray1-bg class</div>
			<div className="gray2-bg">gray2-bg class</div>
			<ColorTesterBox className="primary-bg color-state">
				color-state class
			</ColorTesterBox>
			<ColorTesterBox className={text('className', '')}>
				Try it yourself
			</ColorTesterBox>
		</div>
	))
