import React from 'react'
import Routes from '@config/router'
import './container.scss'
import monk from '@static/images/monk.jpeg'
import { Button } from 'antd'

export default () => [
  <div key="container" className="container">
    <img src={monk} alt="小和尚" />
    <Button type="primary">sadasd</Button>
    <Routes />
  </div>,
]
