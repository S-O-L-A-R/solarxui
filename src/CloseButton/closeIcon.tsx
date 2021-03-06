import React from 'react'

export interface Props {
	size: number
}

function CloseIcon(props: Props) {
	return (
		<svg
			fill="none"
			height={props.size}
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m7.23624 7.94632-7.081999 7.08198c-.19675.1968-.19675.5155 0 .7123.09825.0985.22725.1475.356.1475.129 0 .25775-.049.356-.1475l7.135249-7.13528 7.13521 7.13528c.0985.0985.2273.1475.356.1475.1288 0 .2578-.049.356-.1475.1968-.1968.1968-.5155 0-.7123l-7.08171-7.08198 7.08651-7.087c.1967-.19675.1967-.5155 0-.71225-.1968-.1965002-.5155-.1965002-.712 0l-7.13976 7.14025-7.140499-7.14c-.19675-.1965002-.51525-.1965002-.712 0-.19675.19675-.19675.5155 0 .71225z"
				fill="currentColor"
			/>
		</svg>
	)
}

CloseIcon.defaultProps = {
	size: 16,
}

export default CloseIcon
