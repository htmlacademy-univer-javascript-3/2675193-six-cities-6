import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export function NotFoundScreen() {
  return (
    <><Header fromRoot={false}/>
      <section style={{margin: 'auto', width: '50%'}}>
        <section style={{textAlign: 'center'}}>
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Root}>Вернуться на главную</Link>
        </section>
      </section>
    </>
  );
}
