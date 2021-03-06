# solorxui

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://s-o-l-a-r.github.io/solarxui)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/S-O-L-A-R/solarxui.svg?branch=master)](https://travis-ci.org/S-O-L-A-R/solarxui)



React UI Framework with S.O.L.A.R Design System

### Design System

[View Complete Design System](https://www.figma.com/file/yDUxOHgrebpOtAghOzpspq/Solar-Design-System?node-id=0%3A1)

### Development

Run storybook
```
npm run dev
```

Build Githuh Page
```
npm run build:demo
```

Build Library
```
npm run build
```

### Setup

In header section

```html
<link href="https://fonts.googleapis.com/css?family=Prompt:300,400&display=swap&subset=thai" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Sarabun:300,700&display=swap&subset=thai" rel="stylesheet">
```

In React App

```jsx
import React from 'react'
import { SolarXUIStylesheet } from 'solarxui'

const App = () => (
    <>
        <SolarXUIStyleSheet />
        <div>Your App</div>
    </>
)
```
