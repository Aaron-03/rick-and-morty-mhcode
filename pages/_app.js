import CharacterProvider from '../src/providers/character.provider';
import '../styles/style.scss';

export default function App({ Component, pageProps }) {
  return (
  <CharacterProvider>
    <Component {...pageProps} />
  </CharacterProvider>
  );
}
