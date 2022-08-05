import {defaultTo, splitAt} from 'ramda';

export const parseName = (name?: string) => {
  const defaultName = defaultTo('');

  return splitAt(
    defaultName(name).indexOf('-'),
    defaultName(name).replaceAll(/[_-]/g, ' ').trim(),
  );
};
