import React, { useContext, useEffect } from 'react';
import Layout from '../../src/Layout/Layout';
import { LocationContext } from '../../src/contexts/location.context';
import LocationProvider from '../../src/providers/location.provider';
import LocationList from '../../src/components/location/LocationList';


const LocationPage = () => {

 

  return (
    <LocationProvider>
      <Layout>
        <LocationList />
      </Layout>
    </LocationProvider>
  )
}

export default LocationPage;