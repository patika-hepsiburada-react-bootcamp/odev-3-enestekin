import { createContext, useState, useEffect } from 'react'

const VoteContext = createContext()

const initialVotes = { google: 0, brave: 0, duckduckgo: 0, bing: 0 }

export const VoteProvider = ({ children }) => {
  const votesData = JSON.parse(localStorage.getItem('votes')) || initialVotes
  const [votes, setVotes] = useState(votesData)

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes))
  }, [votes])

  const values = {
    votes,
    setVotes,
  }

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>
}

export default VoteContext
