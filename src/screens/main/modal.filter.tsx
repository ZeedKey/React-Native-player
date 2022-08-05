import {useStore} from 'effector-react';
import React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {Modal} from '~components';
import {$songs, setFilter} from '~store';
import styled from 'styled-components/native';

type InputEvent = NativeSyntheticEvent<TextInputChangeEventData>;

type ModalFilterProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
};

export const ModalFilter: React.FC<ModalFilterProps> = ({
  isVisible,
  onBackdropPress,
}) => {
  const {filter} = useStore($songs);
  const onInput = (e: InputEvent) => setFilter(e.nativeEvent.text);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      animationIn={'bounceInUp'}
      animationOut={'bounceOutDown'}>
      <Box>
        <Input placeholder="Search by name" onChange={onInput} value={filter} />
      </Box>
    </Modal>
  );
};

const Box = styled.View`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.secondary};
`;
const Input = styled.TextInput`
  width: 100%;
  border-radius: 3px;
  padding: 5px;
  margin: 10px 20px;
`;
