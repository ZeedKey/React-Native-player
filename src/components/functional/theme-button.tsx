import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {useTheme} from 'styled-components/native';
import {NightIcon, SunIcon} from '~icons';
import {toggleTheme} from '~store';
import {ifElse, equals, always} from 'ramda';
import {lightTheme} from 'src/theme';

export const ThemeButton: React.FC = () => {
  const theme = useTheme();

  const Icon = ifElse(
    equals(lightTheme),
    always(SunIcon),
    always(NightIcon),
  )(theme);

  return (
    <DrawerItem
      icon={Icon}
      activeTintColor={theme.color.secondary}
      inactiveTintColor={theme.color.secondary}
      label="Switch theme"
      onPress={toggleTheme}
    />
  );
};
