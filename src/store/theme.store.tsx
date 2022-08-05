import {createEvent, createStore} from 'effector';
import {equals, ifElse} from 'ramda';
import {darkTheme, lightTheme} from '~theme';
import {GlobalThemeType} from '~types';

export const toggleTheme = createEvent('toggleTheme');
export const $theme = createStore<GlobalThemeType>(darkTheme).on(
  toggleTheme,
  state =>
    ifElse(
      equals(darkTheme),
      () => lightTheme,
      () => darkTheme,
    )(state),
);
