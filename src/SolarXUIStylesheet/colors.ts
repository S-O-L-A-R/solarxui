import { css } from 'styled-components'
import { primary, danger, gray } from '../colors'

const colors = css`
	.primary-text {
		color: ${primary};
	}
	.danger-text {
		color: ${danger};
	}
	.gray1-text {
		color: ${gray[1]};
	}
	.gray2-text {
		color: ${gray[2]};
	}
	.white-text {
		color: white;
	}
	.primary-bg {
		background-color: ${primary};
	}
	.danger-bg {
		background-color: ${danger};
	}
	.gray1-bg {
		background-color: ${gray[1]};
	}
	.gray2-bg {
		background-color: ${gray[2]};
	}
	.white-bg {
		background-color: white;
	}
	.color-state {
		&:active {
			filter: brightness(0.8);
		}
	}
	.grayscale {
		filter: grayscale(90%);
	}
`

export default colors
