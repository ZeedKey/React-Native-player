import React from 'react';
import {ROUTES} from './routes';
import {MainHeader, MainScreen, PlayingScreen, PlayingHeader} from '~screens';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  NavigationProp,
  useNavigation as useNativeNavigation,
} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {HomeIcon} from 'src/icons/home-icon';
import {toggleTheme} from 'src/store';
import {ThemeButton} from 'src/components';

type DrawerScreenProps = {
  [ROUTES.HOME]: undefined;
  [ROUTES.PLAYING]: undefined;
};

const Drawer = createDrawerNavigator<DrawerScreenProps>();

export const DrawerBar = () => {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerStyle: {backgroundColor: theme.color.primary, borderWidth: 0},
        drawerStyle: {backgroundColor: theme.color.primary},
        drawerActiveTintColor: theme.color.secondary,
        drawerInactiveTintColor: theme.color.secondary,
      }}
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <ThemeButton />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name={ROUTES.HOME}
        component={MainScreen}
        options={{
          drawerIcon: () => <HomeIcon />,
          header: props => <MainHeader {...props} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.PLAYING}
        component={PlayingScreen}
        options={{
          drawerItemStyle: {display: 'none'},
          header: props => <PlayingHeader {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export const useNavigation = () =>
  useNativeNavigation<NavigationProp<DrawerScreenProps, ROUTES>>();
