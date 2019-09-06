import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withSolarXUIStylesheet from './decorators/withSolarXUIStylesheet'

const req = require.context('../src', true, /stories\.tsx$/)

function loadStories() {
	req.keys().forEach(req)
}

addDecorator(withKnobs)
addDecorator(withSolarXUIStylesheet)

configure(loadStories, module)
