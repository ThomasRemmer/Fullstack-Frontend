import Card from "../../components/Card/Card"
const CardContainer = ({games}) =>{
    
    return(
        <div>
        {games.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          faction={game.faction}
          result={game.result}
          notes={game.text}
        />
      ))}
        </div>
    )
}
export default CardContainer;