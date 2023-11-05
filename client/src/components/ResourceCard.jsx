import React from 'react'
import './ResourceCard.css'


export const ResourceCard = (props) => {
    const openResource = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div className='resourceupc'>
        <div className="resourcecardbg"></div>
        <div className="resourceprofile-down">
            <div className="resourceprofile-title">{props.name}</div><br/>
            <div className="resourceprofile-description">{<p>{props.bio}</p>}
            </div><br/>
            <div className="resourcebutton" onClick={() => openResource(props.url)}>Use this resource!</div>
        </div>
    </div>
  )
}
