import React, { useReducer } from 'react';
import Form from "./components/Form";
import NewestPerson from "./components/NewestPerson";
import People from "./components/People";
import PeopleContext from "./context/PeopleContext";
import PeopleReducer from "./context/PeopleReducer";
import { ADD_PERSON } from "./context/Types";

const App = () => {
  const intialState = {people: [
    {
      firstName: 'Samuel',
      lastName: 'Davidsson'
    },
    {
      firstName: 'Madelen',
      lastName: 'Andersen'
    }
  ]};

  const [state, dispatch] = useReducer(PeopleReducer, intialState)

  const addPerson = (person) => {
    dispatch({
      type: ADD_PERSON,
      payload: person
    })
  }
    return (
      <PeopleContext.Provider
      value={{
        people: state.people,
        addPerson
      }}>
      <div className="container mt-4">
        <div className="row">  
        <Form />
        <People />   
        <NewestPerson />    
        </div>
      </div>
      </PeopleContext.Provider>
    )
}
export default App;
