import { useEffect, useState } from 'react';
import { CharacterContext } from '../contexts/character.context';
import { getCharacters, getCharacterEpisode } from '../services/api.service';
import useEpisode from '../hooks/useEpisode';


const CharacterProvider = ({ children }) => {

  const initialState = {
    characters: [],
    character: null,
    pages: 0,
    currentPage: 1,
    nextPage: 0,
    prevPage: 0
  }

  const [ state, setState ] = useState(initialState);

  const getUrlParam = (param, _url) => {
    try {
      const url = new URL(_url);
      const urlParams = new URLSearchParams(url.search);
      return urlParams.get(param);
    } catch (error) {
      return null;
    }
  }

  const getCharactersbyPage = async (page = 1) => {
    const data = await getCharacters(page);

    const params = {
      next: parseInt(getUrlParam('page', data.info.next)),
      prev: parseInt(getUrlParam('page', data.info.prev))
    }

    setState({
      ...state,
      ...params,
      currentPage: page,
      pages: data.info.pages,
      characters: [ ...data.results ]
    });
  }

  const setCharacter = (character) => {
    setState({
      ...state,
      character: character
    });
  }

  

  return (
    <CharacterContext.Provider
      value={{
        ...state,
        getCharactersbyPage,
        setCharacter
      }}
    >
      { children }
    </CharacterContext.Provider>
  )
}

export default CharacterProvider;