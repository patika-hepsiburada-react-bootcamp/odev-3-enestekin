import { useState, useContext } from 'react'
import { sendMessage } from '../../socketApi'
import VoteContext from '../../contexts/VoteContext'
import styles from './Question.module.css'

const Question = () => {
  const { votes, setVotes } = useContext(VoteContext)
  const [selectedEngine, setSelectedEngine] = useState('google')
  const totalVotes = Object.keys(votes).reduce(
    (previous, key) => previous + votes[key],
    0
  )

  const submitHandler = (e) => {
    e.preventDefault()
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedEngine]: prevVotes[selectedEngine] + 1,
    }))
    sendMessage('new-vote', selectedEngine)
  }

  const selectHandler = ({ target }) => {
    setSelectedEngine(target.value)
  }
  return (
    <div>
      <h2>Which search engine do you prefer?</h2>
      <h3>Total Votes: {totalVotes}</h3>
      <form onSubmit={submitHandler}>
        <label htmlFor="" className={styles.label}>
          <input
            name="option"
            type="radio"
            value="google"
            onChange={selectHandler}
            checked={selectedEngine === 'google'}
          />
          Google
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            name="option"
            type="radio"
            value="brave"
            onChange={selectHandler}
            checked={selectedEngine === 'brave'}
          />
          Brave
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            name="option"
            type="radio"
            value="duckduckgo"
            onChange={selectHandler}
            checked={selectedEngine === 'duckduckgo'}
          />
          Duckduckgo
        </label>
        <label htmlFor="" className={styles.label}>
          <input
            name="option"
            type="radio"
            value="bing"
            onChange={selectHandler}
            checked={selectedEngine === 'bing'}
          />
          Bing
        </label>
        <button type="submit" className={styles.button}>
          Submit Vote
        </button>
      </form>
    </div>
  )
}

export default Question
