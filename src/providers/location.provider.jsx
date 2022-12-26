import { useState } from 'react';
import { LocationContext } from '../contexts/location.context';
import { getLocations } from '../services/api.service';


const LocationProvider = ({ children }) => {

  const initialState = {
    locations: [],
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

  const getLocationsByPage = async (page = 1) => {
    const data = await getLocations(page);

    const params = {
      next: parseInt(getUrlParam('page', data.info.next)),
      prev: parseInt(getUrlParam('page', data.info.prev))
    }

    setState({
      ...state,
      ...params,
      currentPage: page,
      pages: data.info.pages,
      locations: [ ...data.results ]
    });
  }

  

  return (
    <LocationContext.Provider
      value={{
        ...state,
        getLocationsByPage
      }}
    >
      { children }
    </LocationContext.Provider>
  )
}

export default LocationProvider;