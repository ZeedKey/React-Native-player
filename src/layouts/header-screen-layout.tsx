import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type ScreenLayoutProps = {
  children: React.ReactNode;
};

export const HeaderLayout: React.FC<ScreenLayoutProps> = ({children}) => {
  return <SafeArea edges={['top']}>{children}</SafeArea>;
};

const SafeArea = styled(SafeAreaView)`
  background-color: ${props => props.theme.color.primary};
  padding: 0 28px;
`;
