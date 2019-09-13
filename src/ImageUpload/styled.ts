import styled from 'styled-components'
import { gray } from '../colors'

export const StyledImageUpload = styled.div`
	color: #989898;
	background-color: ${gray[1]};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	height: 210px;
`

export const StyledImageInput = styled.input`
	display: none;
`

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
