import React, { InputHTMLAttributes } from 'react'
import { gray } from '../colors'
import SearchIcon from '../icons/search'
import { Container } from './styled'

const SearchBox = ({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<Container className={className}>
			<SearchIcon size={18} color={gray[2]} />
			<input className="highlight" {...props} />
		</Container>
	)
}

SearchBox.defaultProps = {
	placeholder: 'Find your favorite menu...',
}

export default SearchBox
