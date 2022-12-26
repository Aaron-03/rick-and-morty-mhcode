import React, { useContext, useEffect } from 'react';
import { LocationContext } from '../../contexts/location.context';
import LocationItem from './LocationItem';
import Pagination from '../pagination/Pagination';

const LocationList = () => {

  const { locations, currentPage, pages, next, prev, getLocationsByPage } = useContext(LocationContext);

  useEffect(() => {
    getLocationsByPage(1);
  }, []);


  return (
    <div>
      <h2 className='title title-location'>Locations from episodies</h2>
      <Pagination
        currentPage={ currentPage }
        pages={ pages }
        next={ next }
        prev={ prev }
        getItemsByPage={ getLocationsByPage }
      />
      <ul className='locations'>
        {
          locations.map(location => (
            <LocationItem
              key={ location.id }
              location={ location }
            />
          ))
        }
      </ul>
    </div>
  )
}

export default LocationList;