import styled from 'styled-components'
import { gray } from '../colors'

const TEXT_AREA_HEIGHT = '140px'

export const Container = styled.div`
	width: 100%;
	height: ${TEXT_AREA_HEIGHT};
	box-sizing: border-box;
	padding: 10px 16px;
	border-radius: 16px;
	display: flex;
	align-items: center;
	textarea {
		border: none;
		outline: none;
		font-size: 18px;
		width: 100%;
		height: 100%;
		background: ${gray[0]};
		resize: none;
		::placeholder {
			color: ${gray[2]};
		}
	}
`
