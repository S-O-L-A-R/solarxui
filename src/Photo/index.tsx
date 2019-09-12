import React from 'react'
import { PhotoImg } from './styled'

interface Props {
	src: string
	variant: 'normal' | 'circle'
	width?: number
	height?: number
	size: number
	alt?: string
	onClick?: () => void
}

const Photo = ({ src, variant, alt, size, width, height, onClick }: Props) => {
	const w = width || size
	const h = height || size
	return (
		<PhotoImg
			src={src}
			alt={alt}
			width={w}
			height={h}
			onClick={onClick}
			variant={variant}
		/>
	)
}

Photo.defaultProps = {
	size: 100,
	variant: 'normal',
}

export default Photo
