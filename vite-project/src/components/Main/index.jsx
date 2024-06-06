import { Column } from "../Column";
import { useState } from "react";
import { tasks } from "../../data.js";
import { statusList } from "../../data.js";
export const Main = () => {
	const [cards, setCards] = useState(tasks)
    return (
        <main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
						{statusList.map((status, i) => (
							<Column 
							key={i}
							title={status} 
							cards={cards.filter((card) => card.status === status)} 
						/>
						))}
						{/* <Column 
							title="Без статуса" 
							cards={cards.filter((card) => card.status === "Без статуса")} 
						/>
						<Column 
							title="Тестирование" 
							cards={cards.filter((card) => card.status === "Тестирование")} 
						/>
						<Column 
							title="Нужно сделать" 
							cards={cards.filter((card) => card.status === "Нужно сделать")} 
						/>
						<Column 
							title="В работе" 
							cards={cards.filter((card) => card.status === "В работе")} 
						/>
						<Column 
							title="Готово" 
							cards={cards.filter((card) => card.status === "Готово")} 
						/> */}
					</div>
				</div>
			</div>
		</main>
    )
}