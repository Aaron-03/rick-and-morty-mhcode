import React, { useContext, useEffect } from 'react';
import useEpisode from '../../hooks/useEpisode';
import { CharacterContext } from '../../contexts/character.context';

const CharacterItem = ({ character }) => {

  const { episode } = useEpisode(character.episode[0]);
  const { setCharacter } = useContext(CharacterContext);

  const {
    url,
    image,
    name,
    status,
    gender,
    location,
    species
  } = character;

  const statusImages = {
    alive: {
      text: 'Is alive',
      image: 'https://cdn-icons-png.flaticon.com/512/8944/8944488.png'
    },
    dead: {
      text: 'Is dead',
      image: 'https://cdn-icons-png.flaticon.com/512/4334/4334124.png'
    },
    unknown: {
      text: 'Who knows?',
      image: 'https://cdn-icons-png.flaticon.com/512/7443/7443570.png'
    }
  }

  const statusImg = statusImages[status.toLowerCase()];
  
  return (
    <li className='character' onClick={ () => setCharacter(character) }>
      <div className='character-img'>
        <div className='character-alive'>
          <div className='character-alive-alert'>
            <img src={ statusImg.image } alt="" />
            <p>{ statusImg.text }</p>
          </div>
        </div>
        <img className='character-cover' src={ image } alt={ name } />
      </div>

      <div className='character-info'>
        <div className='character-texts'>
          <button
            type='button'
            className='character-name'
          >{ name }</button>
          <div className='character-content'>
            <p>Gender: <span>{ gender }</span></p>
            <p>Last seen on: <span>{ location.name }</span></p>
            { (episode && <p>In episode <span>{ episode.name }</span></p>) }
          </div>
        </div>

        <div className='character-footer'>
          <div className='texts'>
            {
              (
                episode !== null ?
                <>
                  <p>First time on</p>
                  <p>{ episode.air_date }</p>
                </>
                : <p>Loading...</p>
              )
            }
          </div>
          <span className={`character-species ${ species.toLowerCase() == 'human' ? 'human' : 'alien' }`}>{ species }</span>
        </div>
      </div>
    </li>
  )
}

export default CharacterItem;