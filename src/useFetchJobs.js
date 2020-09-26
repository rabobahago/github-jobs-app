import { useReducer } from 'react'
const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
}
const reducer = (state, action) => {
  switch (action.type) {
  }
}
const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })
  return {
    jobs: [],
    loading: false,
    error: false,
  }
}
export default useFetchJobs
