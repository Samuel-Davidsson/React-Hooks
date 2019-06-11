import React, { useState } from 'react';
import Form from "./components/Form";
import NewestPerson from "./components/NewestPerson";
import People from "./components/People";

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: 'Samuel',
      lastName: 'Davidsson'
    },
    {
      firstName: 'Madelen',
      lastName: 'Andersen'
    }
  ])

  const addPerson = (person) => {
    setPeople([...people, person])
  }
  
    return (
      <div className="container mt-4">
        <div className="row">  
        <Form addPerson={addPerson}/>
        <People people={people}/>   
        <NewestPerson newestPerson={people[people.length -1]}/>    
        </div>
      </div>
    )
}
export default App;
