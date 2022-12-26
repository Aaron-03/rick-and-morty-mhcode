import { useEffect, useState } from 'react'
import { getCharacterEpisode } from '../services/api.service';

const useEpisode = (initialState) => {

  const [ episode, setEpisode ] = useState(null);
  
  const getCharacterEpisodeId = async (episode) => {
    const data = await getCharacterEpisode(episode);
    setEpisode(data);
  }

  useEffect(() => {
    getCharacterEpisodeId(initialState);
  }, []);

  return {
    episode
  }
}

export default useEpisode;