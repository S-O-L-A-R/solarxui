import styled, { css } from 'styled-components'
import { primary } from '../colors'

function applySize({ size }: { size: number }) {
	return css`
		width: ${`${size}px`};
		height: ${`${size}px`};
	`
}

export const Container = styled.div`
	background-color: ${primary};
	color: white;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	${applySize};
`
