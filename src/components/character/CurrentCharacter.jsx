import React, { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../../contexts/character.context';
import useEpisode from '../../hooks/useEpisode';

const CurrentCharacter = () => {

  const { character, setCharacter } = useContext(CharacterContext);
  const [ infoEpisode, setInfoEpisode ] = useState(null);
  
  const { episode } = useEpisode(character.episode[0]);
  const {
    image,
    name,
    origin,
    location
  } = character;

  const episodeText = character.episode.length > 1 ? 'episodies' : 'episode';

  useEffect(() => {
    if (episode) {
      const _episode = episode.episode.split('E');
      const sesion   = _episode[0].split('S')[1];
      const chapter  = _episode[1];
      setInfoEpisode({
        ...infoEpisode,
        sesion: sesion,
        chapter: chapter
      });
    }
  }, [ episode ]);

  return (
    <div className='current-character-container'>
      <div className='current-character' onBlur={ () => setCharacter(null) }>
        <div className='current-character-content'>
          <button
            type='button'
            className='current-character-btn-close'
            onClick={ () => setCharacter(null) }
          >X</button>
          <img
            src={ image }
            alt={ name }
            className='current-character-image'
          />
          {
            infoEpisode &&
            (
            <p className='current-character-text'>
              { name } first appears in episode { infoEpisode.sesion } of season { infoEpisode.chapter }. He appeared in { character.episode.length } { episodeText } and is located in { location.name }
            </p>
            )
          }
          
        </div>
        <p className='current-character-origin'>
          <span className='current-character-origin-name'>{ origin.name }</span>
          <span className='current-character-origin-text'>Origin</span>
        </p>
      </div>
    </div>
  )
}

export default CurrentCharacter;