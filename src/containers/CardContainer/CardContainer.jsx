import Card from "../../components/Card/Card"
const CardContainer = ({holidays}) =>{
    
    return(
        <div>
        {holidays.map((holiday) => (
        <Card
          key={holiday.id}
          id={holiday.id}
          name={holiday.name}
          date={holiday.date}
          text={holiday.text}
          photo={holiday.photo}
          endDate={holiday.endDate}
        />
      ))}
        </div>
    )
}
export default CardContainer;