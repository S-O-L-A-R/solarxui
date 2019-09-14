import styled from 'styled-components'
import { gray } from '../colors'

const INPUT_HEIGHT = '40px'

export const Container = styled.div`
	width: 100%;
	height: ${INPUT_HEIGHT};
	box-sizing: border-box;
	padding: 8px 16px;
	border-radius: 100vw;
	display: flex;
	align-items: center;
	input {
		outline: none;
		border: none;
		font-size: 18px;
		width: 100%;
		background: ${gray[0]};
		::placeholder {
			color: ${gray[2]};
		}
	}
`
