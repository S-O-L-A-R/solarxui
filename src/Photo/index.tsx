import React, { HTMLAttributes } from 'react'
import { PhotoImg } from './styled'

interface Props extends HTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
	size: number
	variant: 'normal' | 'circle'
	width?: number
	height?: number
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
	alt: '',
}

export default Photo
