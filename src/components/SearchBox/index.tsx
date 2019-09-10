import React, { HtmlHTMLAttributes, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { gray } from '../../colors'
import SearchIcon from '../../icons/search'

interface Props extends HTMLAttributes<HTMLInputElement> {
	placeholder: string
	className?: string
}

const SEARCH_BOX_HEIGHT = '50px'

const Container = styled.div`
	width: 100%;
	height: ${SEARCH_BOX_HEIGHT};
	box-sizing: border-box;
	padding: 12px 16px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	border-radius: 16px;
	display: flex;
	align-items: center;
	input {
		outline: none;
		border: none;
		font-size: 18px;
		width: 100%;
		::placeholder {
			color: ${gray[2]};
		}
	}
	> *:not(:last-child) {
		margin-right: 8px;
	}
`

const SearchBox = ({ placeholder, className, ...props }: Props) => {
	return (
		<Container className={className}>
			<SearchIcon size={18} color={gray[2]} />
			<input
				className="highlight gray2-text"
				placeholder={placeholder}
				{...props}
			/>
		</Container>
	)
}

SearchBox.defaultProps = {
	placeholder: 'Find your favorite menu...',
}

export default SearchBox
