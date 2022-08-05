import React from 'react';
import {HeaderLayout} from '~layouts';
import {NavBar} from '~components';
import {ArrowIcon} from '~icons';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const PlayingHeader: React.FC<DrawerHeaderProps> = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <HeaderLayout>
      <NavBar
        StartIcon={
          <TouchableOpacity onPress={goBack}>
            <ArrowIcon />
          </TouchableOpacity>
        }>
        Playing Now
      </NavBar>
    </HeaderLayout>
  );
};
