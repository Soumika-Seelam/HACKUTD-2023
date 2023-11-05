import React from 'react';
import { ResourceCard } from '../components/ResourceCard.jsx';
import resourcelist from './resources.js';

export default function Resources() {

    const rows = [];
    for (let i = 0; i < resourcelist.resource.length; i += 4) {
        rows.push(resourcelist.resource.slice(i, i + 4));
    }

    return (
        <div>
        <div className='subheading'>Resources</div><br/>
        <div className="characters">
        {rows.map((row, rowIndex) => (
        <div className="card-row" key={rowIndex}>
            {row.map((resource, index) => (
            <div className="card" key={index}>
              <ResourceCard name={resource.name} bio={resource.bio} url={resource.url} />
            </div>
        ))}
        </div>
      ))}
    </div>
    </div>
  );
}