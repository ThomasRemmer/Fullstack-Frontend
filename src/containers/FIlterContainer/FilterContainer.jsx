import{useState} from "react";
import "./FilterContainer.scss"

const FilterContiner = ({checkName, checkStatus}) =>{
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");

    const handleFilter = e => {
        e.preventDefault()
        checkName(name)
        
        checkStatus(status)
        
    }

    return (
        <form onSubmit={handleFilter} className="UserForm">
        <label className="UserForm--Item">Location</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="UserForm--Item UserForm--Item__Input"
        />
        <label className="UserForm--Item">Holiday Status</label>
        <select
          value={status}
          className="UserForm--Item UserForm--Item__Input"
          onChange={(e) => setStatus(e.target.value)}
        >
            <option value="">Select an Option</option>
          <option value="Current Holidays">Current Holidays</option>
          <option value="Upcomming Holidays">Upcomming Holidays</option>
          <option value="Previous Holidays">Previous Holidays</option>
        </select>
        <button className="UserForm--Item UserForm--Item__Input">
          Submit
        </button>
        </form>
    )

}
export default FilterContiner;