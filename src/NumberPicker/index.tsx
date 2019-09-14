import React from 'react'
import { StyledContainer, StyledNumberContainer } from './styled'
import MinusButton from '../CircleButton/MinusButton'
import PlusButton from '../CircleButton/PlusButton'

interface Props {
	value: number
	onChange?: () => void
	onDecrease: () => void
	onIncrease: () => void
}

export default function NumberPicker({ onIncrease, onDecrease, value }: Props) {
	return (
		<StyledContainer>
			<MinusButton onClick={onDecrease} />
			<StyledNumberContainer>{value}</StyledNumberContainer>
			<PlusButton onClick={onIncrease} />
		</StyledContainer>
	)
}
