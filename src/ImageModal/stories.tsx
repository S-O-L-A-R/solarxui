import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import ImageModal from '.'

const Wrapper = styled.div`
	padding: 24px;
`

storiesOf('Modal', module).add('ImageModal', () => (
	<ImageModal
		src={text(
			'src',
			'https://avatars1.githubusercontent.com/u/10514215?s=460&v=4',
		)}
		isOpen={boolean('isOpen', false)}
	>
		<Wrapper>{text('children', 'This is very cool modal')}</Wrapper>
	</ImageModal>
))
