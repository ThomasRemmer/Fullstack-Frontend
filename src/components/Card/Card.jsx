import "./Card.scss"
const Card = ({id, name, faction,result,notes}) =>{
    
    

return (
    <>
      <div className="Card">
        <p className="card__heading">{name}</p>
        <p className="card__heading">{faction}</p>
        <p className="card__content">{result}</p>
        <p className="card__content">{notes}</p>
        <button onClick={() => fetch(`http://localhost:8080/images/${id}`, {
        method:"DELETE",
    })}>Delete</button>
      </div>
    </>
)
}
export default Card;