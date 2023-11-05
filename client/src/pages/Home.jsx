import React from 'react';
import {Card} from '../components/Card';
import data from "../components/data";
import MoneyIcon from "../assets/moneyicon.png";
import Mentoring from "../assets/Mentoring.png";

export default function Home () {
  const charactersToShow = data.characterData.slice(0, 4);

  return (
    <div>
      <div className="App">
          <br/><br/><div className="mainTitle" style={{backgroundImage: `url(${Mentoring})`}}/><br/>
          <div className="greenContainer">
          <div className='iconstext'>
            <img src={MoneyIcon} className="icon"></img>
            <div className="sideText"> What is Cents.ai? </div><br/> 
          </div>
          <div className="txtanswers"> Cents.ai is a service connecting users to live chat sessions with renowned financial leaders, enabling direct interaction and mentorship. Access an extensive library of curated finance resources, from articles to videos, tailored to various expertise levels and financial needs. Enjoy accessible, personalized financial guidance through on-demand support, making expert advice within reach for every user, irrespective of their financial knowledge or experience. </div><br/>
          <div className='iconstext'>
            <img src={MoneyIcon} className="icon"></img>
            <div className="sideText"> How do I start a chat? </div><br/>
          </div>
          <div className="txtanswers"> Click on your chosen mentor and ask a question to begin! </div><br/>
          </div>
          <br/><br/>
          <div className="subheading"> Start a Chat </div><br/>
          <div className="characters">
          <div className = "card-row">
            {charactersToShow.map((character,index) => (
              <div key={index}>
                <Card image={character.image} name={character.name} bio={character.bio} id={character.id}/>
              </div>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
  }
