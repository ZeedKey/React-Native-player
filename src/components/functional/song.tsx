import React from 'react';
import {Body2, H2} from '~typography';
import styled from 'styled-components/native';
import {DeleteIcon, MusicIcon} from 'src/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStore} from 'effector-react';
import {$songs, setSongs} from 'src/store';
import {not, equals} from 'ramda';

type Song = {
  onPress?: () => void;
  label: string;
  description: string;
};

export const Song: React.FC<Song> = ({onPress, label, description}) => {
  const songs = useStore($songs);
  const deleteSong = () =>
    setSongs(songs.cachedSongs.filter(song => not(equals(song.name)(label))));

  return (
    <Box>
      <Content onPress={onPress}>
        <MusicIcon />
        <Meta>
          <Label numberOfLines={1} ellipsizeMode="tail">
            {label}
          </Label>
          <Description numberOfLines={1} ellipsizeMode="tail">
            {description}
          </Description>
        </Meta>
      </Content>
      <TouchableOpacity onPress={deleteSong}>
        <DeleteIcon />
      </TouchableOpacity>
    </Box>
  );
};

const Box = styled.View`
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const Label = styled(H2)`
  font-size: ${props => props.theme.size.rg};
  color: ${props => props.theme.color.secondary};
`;
const Description = styled(Body2)`
  font-size: ${props => props.theme.size.sm};
  color: ${props => props.theme.color.optional_1};
  text-transform: uppercase;
`;
const Meta = styled.View`
  justify-content: space-evenly;
  margin-left: 10px;
  width: 70%;
`;
const Content = styled.TouchableOpacity`
  flex-direction: row;
`;
