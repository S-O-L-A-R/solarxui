import styled from 'styled-components'
import { gray } from '../colors'

export const Thumbnail = styled.div`
	position: relative;
	width: 100%;
	height: 210px;
	border-radius: 16px 16px 0 0;
	background-image: url(${({ src }: { src: string }) => src});
	background-color: ${gray[1]};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`

export const CloseContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 20px;
	display: flex;
	justify-content: center;
	> button {
		background: transparent;
		border: 1px solid white;
		color: white;
	}
`
