// import {inject} from 'react-web-component-injector'
// import Header from './components/Header'

// inject({
//     'header': Header
// })

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)