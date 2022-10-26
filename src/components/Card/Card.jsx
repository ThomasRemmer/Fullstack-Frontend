import "./Card.scss"
const Card = ({id, name, date,text,photo,endDate}) =>{
    
    

return (
    <>
      <div className="Card">
        <p className="card__heading">{name}</p>
        <p className="card__heading">{date} : {endDate}</p>
        
        <p className="card__content">{text}</p>
        <img alt="Holiday" src={photo} className="card__content" />
        <br/>
        
        <button onClick={() => fetch(`http://localhost:8080/images/${id}`, {
        method:"DELETE",
    }, window.location.reload(false)) }>Delete</button>
      </div>
    </>
)
}
export default Card;