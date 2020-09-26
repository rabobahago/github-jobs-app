import React from 'react'
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'

function App() {
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      {loading && <h1>loading....</h1>}
      {error && <h1> error, Try refreshing</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  )
}

export default App
