import Header from './components/Header/Header'
import { VoteProvider } from './contexts/VoteContext'
import Container from './components/Container/Container'

function App() {
  return (
    <>
      <Header />
      <VoteProvider>
        <Container />
      </VoteProvider>
    </>
  )
}

export default App
