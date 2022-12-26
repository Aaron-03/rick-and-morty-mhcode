import React from 'react';

const LocationItem = ({ location }) => {

  const {
    name,
    type,
    dimension,
    residents,
    url,
    created
  } = location;

  // {
  //   "id": 1,
  //   "name": "Earth (C-137)",
  //   "type": "Planet",
  //   "dimension": "Dimension C-137",
  //   "residents": [
  //       "https://rickandmortyapi.com/api/character/38"
  //   ],
  //   "url": "https://rickandmortyapi.com/api/location/1",
  //   "created": "2017-11-10T12:42:04.162Z"
  // }

  return (
    <li className='location'>
      <span className='location-name'>{ name }</span>
      <span className='location-type'>{ type }</span>
      <div className='location-content'>
        <p className='location-residents'>Introduced in <span>{ residents.length }</span> episodes</p>
        <p className='location-dimension'>Dimension <span>{ dimension }</span></p>
        <p className='location-created'>It was shown on <span>{ new Date(created).toLocaleDateString() }</span></p>
      </div>
    </li>
  )
}

export default LocationItem;