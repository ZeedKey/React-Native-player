import React, { useState} from 'react';
import {Body2, H2} from '~typography';
import styled from 'styled-components/native';
import {MoreIcon} from 'src/icons';
import {ModalOptions} from './modal-options';

type Song = {
  uri?: string;
  onPress?: () => void;
  label?: string;
  description?: string;
};

export const Song: React.FC<Song> = ({uri, onPress, label, description}) => {
  const [modalPosition, setModalPosition] = useState({x: 0, y: 0});
  const [isMoreVisible, setMoreVisible] = useState(false);
  const onMorePress = () => setMoreVisible(state => !state);
  const onBackdropPress = () => setMoreVisible(false);

  return (
    <Box>
      <ModalOptions
              isVisible={isMoreVisible}
              onClose={onBackdropPress}
              posX={modalPosition.x}
              posY={modalPosition.y} onAddClick={function (): void {
                  throw new Error('Function not implemented.');
              } } onRemoveClick={function (): void {
                  throw new Error('Function not implemented.');
              } } onDeleteClick={function (): void {
                  throw new Error('Function not implemented.');
              } }      />
      <Content onPress={onPress}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Meta>
          <Label numberOfLines={1} ellipsizeMode="tail">
            {label}
          </Label>
          <Description numberOfLines={1} ellipsizeMode="tail">
            {description}
          </Description>
        </Meta>
      </Content>

      <MoreIcon onPress={onMorePress} />
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
const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 999px;
`;
const Meta = styled.View`
  justify-content: space-evenly;
  margin-left: 10px;
  width: 70%;
`;
const Content = styled.TouchableOpacity`
  flex-direction: row;
`;
