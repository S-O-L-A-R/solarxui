import styled from 'styled-components'
import { primary } from '../colors'

export const StyledCircleButton = styled.button`
	border-radius: 50%;
	background-color: ${primary};
	color: white;
	height: ${(props: { size: number }) => props.size}px;
	width: ${(props: { size: number }) => props.size}px;
	outline: none;
	border: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
`
