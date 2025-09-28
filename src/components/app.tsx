import MainScreen from './main.tsx';

type AppProps = {
  placesCount: number;
}

export function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount}/>
  );
}
