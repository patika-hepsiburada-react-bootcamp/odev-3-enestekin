import React, { useEffect, useContext } from 'react'
import { connectSocket, subscribeToData } from '../../socketApi'
import VoteContext from '../../contexts/VoteContext'
import Question from '../Question/Question'
import Chart from '../Chart/Chart'
import styles from './Container.module.css'

const Container = () => {
  const { votes, setVotes } = useContext(VoteContext)

  useEffect(() => {
    connectSocket()

    subscribeToData((data) => {
      setVotes(data)
    })
  }, [setVotes])

  return (
    <div className={styles.container}>
      <Question />
      <Chart votes={votes} />
    </div>
  )
}

export default Container
