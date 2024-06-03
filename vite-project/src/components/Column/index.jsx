import { Card } from "../Card"

export const Column = ({title}) => {
    return (
        <div class="main__column column">
            <div class="column__title">
                <p>{title}</p>
            </div>
            <div class="cards">
                <Card cardTitle="Web Design" />
                <Card cardTitle="Research" />
                <Card cardTitle="Web Design" />
                <Card cardTitle="Copywriting" />
                <Card cardTitle="Web Design" />
            </div>
        </div>	
    )
}