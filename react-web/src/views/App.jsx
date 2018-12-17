import React from 'react'
import Header from '@layout/header/header'
import Container from '@layout/container/container'
import Footer from '@layout/footer/footer'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    )
  }
}
