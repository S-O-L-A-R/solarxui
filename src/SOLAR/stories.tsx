import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import SOLAR from '.'

storiesOf('Logo', module).add('S.O.L.A.R', () => (
	<SOLAR size={number('size', 120)} />
))
