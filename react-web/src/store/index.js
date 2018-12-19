import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as courseReducer } from '@views/course/store'

const reducer = combineReducers({
  course: courseReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
