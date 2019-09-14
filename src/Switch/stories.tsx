import React, { useCallback } from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import Switch from '.'

const TesterBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: ${({ width }: { width: string }) => width};
`

const Button = () => {
	const onClick = useCallback(() => {
		// tslint:disable-next-line
		console.log('clicked')
	}, [])
	const onChange = useCallback(e => {
		// tslint:disable-next-line
		console.log(e)
	}, [])
	return (
		<Switch
			activeDefault={boolean(
				'activeDefault',
				Switch.defaultProps.activeDefault,
			)}
			activeMessage={text('activeMessage', Switch.defaultProps.activeMessage)}
			disableMessage={text(
				'disableMessage',
				Switch.defaultProps.disableMessage,
			)}
			onClick={onClick}
			onChange={onChange}
		/>
	)
}

storiesOf('Switch', module).add('Switch', () => (
	<TesterBox width={text('Container width', '100px')}>
		<Button />
	</TesterBox>
))
