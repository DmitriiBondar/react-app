import { Card } from "../Card";
export const Column = ({title, cards}) => {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {cards.map((card) => {
                    return (
                        <Card 
                            key={card.id} 
                            id={card.id}
                            cardTitle={card.title} 
                            topic={card.topic}
                            date={card.date}
                        />
                    )
                })}
            </div>
        </div>	
    )
}