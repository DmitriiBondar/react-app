import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/index'
import { Main } from './components/Main/index'
import { tasks } from './data'
import { PopBrowse } from './components/PopBrowse'
import { PopNewCard } from './components/PopNewCard'
import { Exit } from './components/PopUser'

function App() {

  const [cards, setCards] = useState(tasks)
  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: '32.01.120 до н.э.',
      topic: "Web design",
      title: "New task",
      status: "Без статуса",
    }
    setCards([...cards, newCard])
  }

  return (
    <div className="wrapper">
      <Exit />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard}/>
      <Main cards={cards} />
    </div>
  )
}

export default App

