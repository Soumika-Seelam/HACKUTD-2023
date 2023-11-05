import React from 'react';
import {Card} from '../components/Card';
import data from "../components/data";

export default function Mentors () {
  return (
    <div>
      <div className="characters">
        {data.characterData.map((character, index) => {
            return (
                 <Card image={character.image} name={character.name} bio={character.bio}/>
            )
        })}
        </div>
    </div>
  )
  }
