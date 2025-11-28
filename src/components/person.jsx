import React from 'react'

export default function Person({ person }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '5px', margin: '10px', width: '250px', width: '80%', backgroundColor: 'white' }}>
            <img
                src={person.picture.large}
                alt="User"
                style={{ width: '100%' }}
            />
            <div className='name' style={{
                fontSize: '18px',
                fontWeight: '600',
                textAlign: 'center'
            }}>
                {person.name.first} {person.name.last}
            </div>
            <p>{person.email}</p>
            <p>Locatin: {person.location.city}, {person.location.country}</p>
            <p>Nationality:  {person.nat}</p>
        </div>
    )
}