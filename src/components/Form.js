import React, { useState, useContext, useMemo } from 'react';
import PeopleContext from '../context/PeopleContext';

const Form = () => {
    const [person, setPerson] = useState({ firstName:"", lastName: ""});
    const context = useContext(PeopleContext)

    const onChange = (event) => {
        setPerson({...person, [event.target.name]: event.target.value});
      }
    
      const onSubmit = (event) => {
        event.preventDefault();
        if(person.firstName.trim() === "" || person.lastName.trim() === "") return;
    
        const newPerson = {
          firstName: person.firstName.trim(),
          lastName: person.lastName.trim(),
        }
        context.addPerson(newPerson);
        setPerson({ firstName: "", lastName: "" });
      }
      const printNumberOfPeople = () => console.log(`Number of people ${context.people.length}`);

      //Never call except intial here if context.people instead of empty array call.
      useMemo(() => printNumberOfPeople(), [])

      return(
        <div className="col">
        <h2>Add person:</h2>
        <hr/>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            name="firstName" 
            placeholder="First Name.." 
            value={person.firstName} 
            onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            name="lastName" 
            placeholder="Last Name.." 
            value={person.lastName} 
            onChange={onChange}
            />
          </div>
          <button className="btn btn-success" type="submit">Add Person</button>
        </form>
    </div>
    )
}
export default Form;