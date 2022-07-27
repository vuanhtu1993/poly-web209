import {createStore} from 'redux'
import rootReducer from './reducer'

// const store = createStore(reducers, initialValue, middleware)
const store = createStore(rootReducer)

export default store;