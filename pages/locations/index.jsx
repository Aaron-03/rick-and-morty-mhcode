import React from 'react';
import Layout from '../../src/layout/Layout';
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