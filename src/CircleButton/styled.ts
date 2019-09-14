import styled, { css } from 'styled-components'

function applySize({ size }: { size: number }) {
	return css`
		width: ${`${size}px`};
		height: ${`${size}px`};
	`
}

export const Container = styled.button`
	color: white;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	border: none;
	padding: 0;
	cursor: pointer;
	${applySize};
`
