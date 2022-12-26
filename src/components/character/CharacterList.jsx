import React, { useContext, useEffect } from 'react';
import { CharacterContext } from '../../contexts/character.context';
import Pagination from '../pagination/Pagination';
import CharacterItem from './CharacterItem';

const CharacterList = () => {

  const { characters, currentPage, pages, next, prev, getCharactersbyPage } = useContext(CharacterContext);

  useEffect(() => {
    getCharactersbyPage();
  }, []);

  return (
    <div>
      <div className='content-title-pagination'>
        <h2 className='title title-character'>All the characters</h2>
        <Pagination
          currentPage={ currentPage }
          pages={ pages }
          next={ next }
          prev={ prev }
          getItemsByPage={ getCharactersbyPage }
        />
      </div>
      <ul className='characters'>
        {
          characters.map(character => (
            <CharacterItem
              key={ character.id }
              character={ character }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default CharacterList;