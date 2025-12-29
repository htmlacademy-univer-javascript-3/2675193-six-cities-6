import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';
import browserHistory from '../browser-history.ts';
import {rootReducer} from './root-reducer.ts';
import {AppRoute} from '../const.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'user/login') {
          browserHistory.push(AppRoute.Root);
        }

        return next(action);
      };
