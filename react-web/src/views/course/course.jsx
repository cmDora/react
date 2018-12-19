import React from 'react'
import { connect } from 'react-redux'
import getData from './store/actions'

class Course extends React.Component {
  constructor() {
    super()
    this.getList = this.getList.bind(this)
  }

  componentDidMount() {
    //  do something here
  }

  getList(event) {
    const { getData } = this.props
    getData(event.target.value)
  }

  render() {
    const { list } = this.props
    return (
      <div>
        <input type="text" onChange={this.getList} />
        <span>{list}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.course.list,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData(value) {
    return dispatch(getData(value))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Course)
