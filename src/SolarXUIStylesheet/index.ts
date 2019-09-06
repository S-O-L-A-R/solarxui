import { createGlobalStyle } from 'styled-components'
import typography from './typography'
import colors from './colors'

const SolarXUIStylesheet = createGlobalStyle`
    ${typography};
    ${colors};
`

export default SolarXUIStylesheet
