import React from 'react';
import {Card} from '../components/Card';
import data from "../components/data";

export default function Home () {
  const charactersToShow = data.characterData.slice(0, 4);

  return (
    <div>
      <div className="App">
          <br/><br/><div className="mainTitle"> VerseAI </div><br/>
          <div className="greenContainer">
          <div className="sideText"> What is Verse AI? </div><br/>  
          <div className="txtanswers"> VerseAI is a service connecting users to live chat sessions with renowned financial leaders, enabling direct interaction and mentorship. Access an extensive library of curated finance resources, from articles to videos, tailored to various expertise levels and financial needs. Enjoy accessible, personalized financial guidance through on-demand support, making expert advice within reach for every user, irrespective of their financial knowledge or experience. </div><br/>
          <div className="sideText"> How do I start a chat? </div><br/>
          <div className="txtanswers"> Click on your chosen mentor and ask a question to begin! </div><br/>
          </div>

          <br/><br/>
          <div className="sideText"> Start a Chat </div><br/>
          <div className="characters">
          <div className = "card-row">
            {charactersToShow.map((character,index) => (
              <div key={index}>
                <Card image={character.image} name={character.name} bio={character.bio}/>
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
  }
