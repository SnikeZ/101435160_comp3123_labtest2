import React from 'react'

export default function Person({ person }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '5px', margin: '10px', width: '250px', width: '80%', backgroundColor: 'white' }}>
            <img 
                src={person.picture.large} 
                alt="User"
                style={{ width: '100%'}}
            />
            <h3>{person.name.first} {person.name.last}</h3>
            <p>{person.email}</p>
            <p>{person.location.city} {person.nat}</p>
        </div>
    )
}