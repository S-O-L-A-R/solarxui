import styled from 'styled-components'
import { gray } from '../../colors'

const SEARCH_BOX_HEIGHT = '50px'

export const Container = styled.div`
	width: 100%;
	height: ${SEARCH_BOX_HEIGHT};
	box-sizing: border-box;
	padding: 12px 16px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	display: flex;
	align-items: center;
	input {
		outline: none;
		border: none;
		font-size: 18px;
		width: 100%;
		::placeholder {
			color: ${gray[2]};
		}
	}
	> *:not(:last-child) {
		margin-right: 8px;
	}
`
