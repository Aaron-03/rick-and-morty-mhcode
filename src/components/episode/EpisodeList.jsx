import React, { useContext, useEffect } from 'react';
import EpisodeItem from './EpisodeItem';
import { EpisodeContext } from '../../contexts/episode.context';
import Pagination from '../pagination/Pagination';

const EpisodeList = () => {

  const { episodies, currentPage, pages, next, prev, getEpisodiesByPage } = useContext(EpisodeContext);

  useEffect(() => {
    getEpisodiesByPage(1);
  }, []);

  return (
    <div className=''>
      <h2 className='title title-episode'>Series episodies</h2>
      <Pagination
        currentPage={ currentPage }
        pages={ pages }
        next={ next }
        prev={ prev }
        getItemsByPage={ getEpisodiesByPage }
      />
      <ul className='episodies'>
        {
          episodies.map(episode => (
            <EpisodeItem
              key={ episode.id }
              episode={ episode }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default EpisodeList;