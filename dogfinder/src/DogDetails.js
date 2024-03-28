import React from "react";
import {Navigate, Link, useParams} from "react-router-dom";

function DogDetails({dogs}) {

    const {name} = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    if (!dog) return <Navigate to="/dogs"/>

    return (
        <>
            <div className="Dog">
                <img src={`/${dog.src}`} alt={dog.name}/>
                <h1>{dog.name}</h1>
                <p>Age: {dog.age}</p>
                <h2>Facts:</h2>
                <ul>
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Go Home</Link>
            </div>
        </>
    )
}

export default DogDetails;