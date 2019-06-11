import React, { useContext } from "react";
import PeopleContext from "../context/PeopleContext";

const PeopleCount = () => {
    const context = useContext(PeopleContext);
    return <h2 className="text-center mt-4">{context.people.length}</h2>
}
export default PeopleCount;