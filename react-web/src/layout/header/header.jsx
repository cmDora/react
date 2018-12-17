import React from 'react'
import {
  Link,
} from 'react-router-dom'

export default () => [
  <div key="header">
    <div>logo</div>
    <div>
      <Link to="/course">基础课程</Link>
      <Link to="/resource">资源库</Link>
      <Link to="/train">教师培训</Link>
      <Link to="/question">常见问题</Link>
    </div>
  </div>,
]
