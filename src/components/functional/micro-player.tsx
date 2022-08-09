import {useFocusEffect} from '@react-navigation/native';
import {defaultTo, prop} from 'ramda';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Track} from 'react-native-track-player';
import {usePlayer} from 'src/hooks';
import {ROUTES, useNavigation} from 'src/navigation';
import {H2, Body1} from 'src/typography';
import styled from 'styled-components/native';
import {ProgressBar} from './bar';
import {PlayerNavigation} from './navigation';

const progressWidth = Dimensions.get('window').width;

export const MicroPlayer: React.FC = () => {
  const {getCurrentTrack} = usePlayer();
  const [track, setTrack] = useState<Track | null>(null);
  const {navigate} = useNavigation();
  const defaultToEmpty = defaultTo({title: '', description: ''});

  const toPlayer = () => navigate(ROUTES.PLAYING);

  useFocusEffect(() => {
    getCurrentTrack().then(setTrack);
  });

  return (
    <Box>
      <Bar width={progressWidth} />
      <Content onPress={toPlayer}>
        <Meta>
          <Label numberOfLines={1} ellipsizeMode="tail">
            {prop('title', defaultToEmpty(track))}
          </Label>
          <Description numberOfLines={1} ellipsizeMode="tail">
            {prop('description', defaultToEmpty(track))}
          </Description>
        </Meta>
        <Controls>
          <PlayerNavigation />
        </Controls>
      </Content>
    </Box>
  );
};

const Box = styled.View`
  position: absolute;
  bottom: 0;
  height: 80px;
  background-color: ${props => props.theme.color.primary};
  justify-content: space-between;
  align-items: center;
`;
const Bar = styled(ProgressBar)`
  border-left-width: 0;
  border-right-width: 0;
`;
const Content = styled.Pressable`
  flex-direction: row;
`;
const Label = styled(H2)`
  font-size: ${props => props.theme.size.md};
  font-family: ${props => props.theme.font.bold};
  width: 100px;
`;
const Description = styled(Body1)`
  font-size: ${props => props.theme.size.rg};
  font-family: ${props => props.theme.font.ultraLight};
  text-transform: uppercase;
  color: ${props => props.theme.color.optional_1};
  width: 200px;
`;
const Meta = styled.View`
  padding: 10px;

  justify-content: space-around;
`;
const Controls = styled.View`
  align-items: center;
  justify-content: center;
  width: 170px;
`;
