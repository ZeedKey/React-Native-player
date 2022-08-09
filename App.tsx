import React, {useEffect} from 'react';

import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerBar} from '~navigation';
import Toast from 'react-native-toast-message';
import {useStore} from 'effector-react';
import {$songs, $theme} from '~store';
import TrackPlayer from 'react-native-track-player';

const App = () => {
  const theme = useStore($theme);

  useEffect(() => {
    const initPlayer = async () => {
      await TrackPlayer.setupPlayer({waitForBuffer: true});
    };
    initPlayer();
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
