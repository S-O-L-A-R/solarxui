import styled, { css } from 'styled-components'
import { primary, danger } from '../colors'

const BUTTON_HEIGHT = '30px'

function applyActiveStyle({ isActive }: { isActive: boolean }) {
	if (isActive) {
		return css`
			border: 1px solid ${primary};
			color: ${primary};
		`
	}
	return css`
		border: 1px solid ${danger};
		color: ${danger};
	`
}

export const StyledButton = styled.button`
	width: 100%;
	height: ${BUTTON_HEIGHT};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 16px;
	box-sizing: border-box;
	padding: 4px;
	font-size: 14px;
	outline: none;
	cursor: pointer;
	${applyActiveStyle};
`
