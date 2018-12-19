import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter,
} from 'react-router-dom'
import {
  Provider,
} from 'react-redux'
import store from '@store'

// 开发用
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

import '@static/css/reset.css'
import App from '@views/App'

const root = document.getElementById('root')

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('@views/App', () => {
    const NextApp = require('@views/App').default  // eslint-disable-line
    render(NextApp)
  })
}
