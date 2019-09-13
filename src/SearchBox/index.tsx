import React, { HTMLAttributes } from 'react'
import { gray } from '../colors'
import SearchIcon from '../icons/search'
import { Container } from './styled'

export interface Props extends HTMLAttributes<HTMLInputElement> {
	placeholder: string
	className?: string
}

const SearchBox = ({ placeholder, className, ...props }: Props) => {
	return (
		<Container className={className}>
			<SearchIcon size={18} color={gray[2]} />
			<input className="highlight" placeholder={placeholder} {...props} />
		</Container>
	)
}

SearchBox.defaultProps = {
	placeholder: 'Find your favorite menu...',
}

export default SearchBox
