import styled from 'styled-components'
import { animated } from 'react-spring'

export const Overlay = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 2;
`

export const ModalContainer = styled(animated.div)`
	position: fixed;
	bottom: 0;
	left: 8px;
	right: 8px;
	background-color: white;
	border-radius: 16px 16px 0 0;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	z-index: 3;
	max-height: 75vh;
	overflow: hidden;
`
