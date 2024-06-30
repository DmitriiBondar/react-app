import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/index'
import { Main } from '../../components/Main/index'
import { tasks } from '../../data'
import { PopBrowse } from '../../components/PopBrowse'
import { PopNewCard } from '../../components/PopNewCard'
import { Exit } from '../../components/PopUser'
import { Wrapper } from '../../globalStyle.styled'
import loader from '/images/loader.gif'

export const MainPage = ({changeTheme, setChangeTheme}) => {

    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)

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
    
    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
    }, [])

    return (
        <Wrapper>
            <Exit />
            <PopNewCard />
            <PopBrowse />
            <Header addCard={addCard} setChangeTheme={setChangeTheme} changeTheme={changeTheme}/>
            {isLoading ? <img className='loaderImg' src={loader} alt='loader'/> : <Main cards={cards}/>}
        </Wrapper>
    )
}