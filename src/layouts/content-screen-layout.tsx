import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ScreenLayoutProps = {
  children: React.ReactNode;
};

export const ScreenLayout: React.FC<ScreenLayoutProps> = ({children}) => {
  return (
    <SafeArea edges={['bottom']}>
      <Screen>{children}</Screen>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  background-color: ${props => props.theme.color.primary};
`;
const Screen = styled.View`
  height: 100%;
  padding: 0 28px;
`;
