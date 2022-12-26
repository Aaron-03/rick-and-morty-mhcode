import { useEffect, useState } from 'react';
import { EpisodeContext } from '../contexts/episode.context';
import { getCharacters, getCharacterEpisode, getEpisodies } from '../services/api.service';


const EpisodeProvider = ({ children }) => {

  const initialState = {
    episodies: [],
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

  const getEpisodiesByPage = async (page = 1) => {
    const data = await getEpisodies(page);
    console.log('data.results', data.results)
    const params = {
      next: parseInt(getUrlParam('page', data.info.next)),
      prev: parseInt(getUrlParam('page', data.info.prev))
    }

    
    setState({
      ...state,
      ...params,
      currentPage: page,
      pages: data.info.pages,
      episodies: [ ...data.results ]
    });
  }

  

  return (
    <EpisodeContext.Provider
      value={{
        ...state,
        getEpisodiesByPage
      }}
    >
      { children }
    </EpisodeContext.Provider>
  )
}

export default EpisodeProvider;