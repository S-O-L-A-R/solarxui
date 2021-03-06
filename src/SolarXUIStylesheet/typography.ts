import { css } from 'styled-components'

const typography = css`
	.highlight {
		font-family: 'Prompt', sans-serif;
	}
	.title {
		font-size: 24px;
	}
	body {
		font-family: 'Sarabun', sans-serif;
		font-weight: 300;
		font-size: 16px;
		.bold {
			font-weight: 700;
		}
		div,
		span,
		input,
		button,
		textarea,
		a {
			font-weight: 300;
		}
	}
`

export default typography
