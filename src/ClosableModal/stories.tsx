import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import ClosableModal from '.'

const Wrapper = styled.div`
	padding: 24px;
`

storiesOf('Modal', module).add('ClosableModal', () => (
	<ClosableModal isOpen={boolean('isOpen', false)}>
		<Wrapper>{text('children', 'This is very cool modal')}</Wrapper>
	</ClosableModal>
))
