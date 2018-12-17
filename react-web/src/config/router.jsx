import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import Course from '@views/course/course'
import Resource from '@views/resource/resource'
import Train from '@views/train/train'
import Question from '@views/question/question'

export default () => [
  <Route path="/" component={() => <Redirect to="/course" />} exact key="first" />,
  <Route path="/course" component={Course} key="course" />,
  <Route path="/resource" component={Resource} key="resource" />,
  <Route path="/train" component={Train} key="train" />,
  <Route path="/question" component={Question} key="question" />,
]
