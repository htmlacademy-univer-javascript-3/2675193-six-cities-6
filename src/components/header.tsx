import {useAppSelector} from '../hooks/store-hooks.ts';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus, getEmail} from '../store/user-data/selectors.ts';
import React from 'react';
import {getFavoriteOffersCount} from '../store/favorites-data/selectors.ts';

type HeaderProps = {
  fromRoot: boolean;
}

function Header({fromRoot}: HeaderProps) {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getEmail);
  const favouritesCount = useAppSelector(getFavoriteOffersCount);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {fromRoot ? (
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>) :
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>}

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthorizationStatus.Auth ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                      <span className="header__favorite-count">{favouritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Root}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </> :
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const HeaderMemo = React.memo(Header);
export default HeaderMemo;
