import styled, { css } from 'styled-components'

interface Props {
	width: number
	height: number
	variant: 'normal' | 'circle'
}

function applySize({ width, height }: Props) {
	return css`
		width: ${`${width}px`};
		height: ${`${height}px`};
	`
}

const variantStyle = {
	normal: css`
		border-radius: 16px;
	`,
	circle: css`
		border-radius: 100%;
	`,
}

function applyVariant({ variant }: Props) {
	return variantStyle[variant]
}

export const PhotoImg = styled.img`
	border-radius: 16px;
	object-fit: cover;
	${applyVariant};
	${applySize};
`
