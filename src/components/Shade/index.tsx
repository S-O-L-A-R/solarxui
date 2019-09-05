import styled from 'styled-components'

interface ShadeProps {
	color: string
}

function isSoftColor(color: string) {
	return ['#FFF', 'white', 'transparent', '#FAFAFA', '#F3F4F5'].includes(color)
}

const Shade = styled.div`
	padding: 0 20px;
	background: ${(props: ShadeProps) => props.color};
	height: 50px;
	font-family: Courier New;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ color }: ShadeProps) => (isSoftColor(color) ? 'black' : 'white')};
`

export default Shade
