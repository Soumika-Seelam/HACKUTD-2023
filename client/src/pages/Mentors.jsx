import React from 'react';
import { Card } from '../components/Card';
import data from '../components/data';

export default function Mentors() {

    const rows = [];
    for (let i = 0; i < data.characterData.length; i += 4) {
        rows.push(data.characterData.slice(i, i + 4));
    }

    return (
        <div>
        <div className='subheading'>Mentors</div> <br/>
        <div className="characters">
        {rows.map((row, rowIndex) => (
        <div className="card-row" key={rowIndex}>
            {row.map((character, index) => (
            <div className="card" key={index}>
              <Card image={character.image} name={character.name} bio={character.bio} />
            </div>
        ))}
        </div>
      ))}
    </div>
    </div>
  );
}
