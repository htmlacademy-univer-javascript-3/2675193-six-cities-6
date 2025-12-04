import Header from '../../components/header.tsx';

export function NotFoundScreen() {
  return (
    <><Header fromRoot={false}/>
      <section style={{margin: 'auto', width: '50%'}}>
        <section style={{textAlign: 'center'}}>
          <h1>404. Page not found</h1>
          <a href="/">Вернуться на главную</a>
        </section>
      </section>
    </>
  );
}
