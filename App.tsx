import React, {useEffect} from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerBar} from '~navigation';
import {usePlayer} from '~hooks';
import Toast from 'react-native-toast-message';
import {useStore} from 'effector-react';
import {$songs, $theme, setSongs} from '~store';
import {loadStore, saveStore} from 'src/utils';
import {AppState} from 'react-native';

const App = () => {
  const theme = useStore($theme);
  const {init, reset, destroy} = usePlayer();

  useEffect(() => {
    init();
    loadStore().then(setSongs);

    return () => {
      reset();
      destroy();
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <DrawerBar />
        </NavigationContainer>
      </ThemeProvider>
      <Toast />
    </>
  );
};

export default App;
