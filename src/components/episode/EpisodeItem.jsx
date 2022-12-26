import React from 'react';

const EpisodeItem = ({ episode }) => {

  const _episode = episode.episode.split('E');
  const sesion   = _episode[0].split('S')[1];
  const chapter  = _episode[1];

  return (
    <li className='episode'>
      <div className='episode-created'>
        <p>I was shown on</p>
        <p>{ episode.air_date }</p>
      </div>
      <p>{ episode.name }</p>
      <p>Sesion { sesion } | Chapter { chapter }</p>
    </li>
  )
}

export default EpisodeItem;