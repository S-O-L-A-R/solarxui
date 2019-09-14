import React, { useMemo, useState, useCallback } from 'react'
import { StyledButton } from './styled'

interface Props {
	activeDefault: boolean
	activeMessage: string
	disableMessage: string
	onChange?: ({ active }: { active: boolean }) => void
	onClick?: () => void
	className?: string
}

const Switch = ({
	activeMessage,
	disableMessage,
	activeDefault,
	onChange,
	onClick,
	className,
}: Props) => {
	const [isActive, setActive] = useState(activeDefault)
	const text = useMemo(() => (isActive ? activeMessage : disableMessage), [
		isActive,
	])
	const toggle = useCallback(() => {
		const active = !isActive
		setActive(active)
		if (onChange) {
			onChange({ active })
		}
		if (onClick) {
			onClick()
		}
	}, [isActive, onChange, onClick])
	return (
		<StyledButton className={className} isActive={isActive} onClick={toggle}>
			{text}
		</StyledButton>
	)
}

Switch.defaultProps = {
	activeDefault: true,
	activeMessage: 'Active',
	disableMessage: 'Disabled',
}

export default Switch
