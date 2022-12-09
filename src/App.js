import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FetchApi from "./FetchApi.js"

const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <FetchApi />
    </QueryClientProvider>
  )
}

export default App