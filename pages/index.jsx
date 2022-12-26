import CharacterList from './../src/components/character/CharacterList';
import Layout from './../src/layout/Layout';

import LocationProvider from '../src/providers/location.provider';
import CurrentCharacter from '../src/components/character/CurrentCharacter';
import { useContext } from 'react';
import { CharacterContext } from '../src/contexts/character.context';


export default function Home() {

  const { character } = useContext(CharacterContext);

  return (
    <LocationProvider>
      <Layout>
        {
          character &&
          (
            <CurrentCharacter />
          )
        }
      <CharacterList />
      </Layout>
    </LocationProvider>
  )
}
