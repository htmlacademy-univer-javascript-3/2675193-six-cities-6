import MainScreen from '../pages/main/main-screen.tsx';

type AppProps = {
  placesCount: number;
}

export function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount}/>
  );
}
