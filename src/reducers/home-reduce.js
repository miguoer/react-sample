import { SAVE_USER_INFO } from '../actions/actions'

const initialState = {
  userInfo: null

}

const home = (state = initialState, action) => {
  switch (action.type) {
  case SAVE_USER_INFO:
    return Object.assign({}, state, {
      userInfo: action.userInfo
    })
  default:
    return state
  }
}

export default home
