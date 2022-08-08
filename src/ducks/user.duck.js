import axios from 'axios'

// Actions
const GET_USERS_LOADING = 'advanced-redux/inspect/GET_USERS_LOADING'
const GET_USERS_SUCCESS = 'advanced-redux/inspect/GET_USERS_SUCCESS'
const GET_USERS_FAILED = 'advanced-redux/inspect/GET_USERS_FAILED'
const RESET_USERS = 'advanced-redux/inspect/RESET_USERS'

// Initial State
const initialState = {
  users: [],
  loading: false,
  error: undefined
}

// Reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case RESET_USERS:
      return {
        ...initialState
      }
    case GET_USERS_LOADING:
      return {
        ...initialState,
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

// Action Creators
export const resetUsers = () => ({
  type: RESET_USERS
})

const getUsersLoading = () => ({
  type: GET_USERS_LOADING
})

const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users
  }
})

const getUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  payload: {
    error
  }
})

// Handling asynchronous operations with redux thunk
export const getUsersAsync = usernames => dispatch => {
  dispatch(getUsersLoading())
  axios.get(`http://localhost:3000/api/users?${usernames.map(username => `username=${username}&`).join('')}`)
    .then(({ data }) => dispatch(getUsersSuccess(data)))
    .catch(error => dispatch(getUsersFailed(error)))
}