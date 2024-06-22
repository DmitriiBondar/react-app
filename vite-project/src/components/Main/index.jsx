import { Column } from "../Column";
import { statusList } from "../../data.js";
import { Container } from "../../globalStyle.styled";
export const Main = ({cards}) => {
    return (
        <main className="main">
			<Container>
				<div className="main__block">
					<div className="main__content">
						{statusList.map((status, i) => (
							<Column 
							key={i}
							title={status} 
							cards={cards.filter((card) => card.status === status)} 
						/>
						))}
					</div>
				</div>
			</Container>
		</main>
    )
}