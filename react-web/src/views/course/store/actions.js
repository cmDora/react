import { GET_LIST } from './constants'

const getList = (data) => ({
  type: GET_LIST,
  data,
})

export default function getData(data) {
  return (dispatch) => {
    // return axiosInstance.get('')
    //   .then((res) => {
    //     return dispatch(getList({list: '没有数据'}))
    //   })
    return dispatch(getList(data))
  }
}

// , getState, axiosInstance
