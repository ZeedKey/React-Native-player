import React, {useState} from 'react';
import {NavBar} from '~components';
import {AddIcon, BurgerIcon, SearchIcon} from '~icons';
import {HeaderLayout} from '~layouts';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {
  DocumentPickerOptions,
  types,
  pickMultiple,
} from 'react-native-document-picker';
import {$songs, setSongs} from 'src/store';
import {useStore} from 'effector-react';
import {includes, not} from 'ramda';
import {showFailureToast, showSuccessToast} from 'src/toast';
import {saveStore} from 'src/utils';
import {ModalFilter} from './modal.filter';

const pickerOptions: DocumentPickerOptions<'ios'> = {
  allowMultiSelection: false,
  type: types.audio,
};

export const MainHeader: React.FC<DrawerHeaderProps> = ({navigation}) => {
  const songs = useStore($songs);
  const [isVisible, setVisible] = useState(false);

  const toggleModal = () => setVisible(state => not(state));
  const doToggleDrawer = () => navigation.toggleDrawer();
  const doPickFile = () =>
    pickMultiple(pickerOptions)
      .then(response =>
        response.filter(song => not(includes(song, songs.cachedSongs))),
      )
      .then(response => {
        saveStore(response);
        return response;
      })
      .then(setSongs)
      .then(showSuccessToast)
      .catch(showFailureToast);

  return (
    <HeaderLayout>
      <NavBar
        StartIcon={
          <TouchableOpacity onPress={doToggleDrawer}>
            <BurgerIcon />
          </TouchableOpacity>
        }
        EndIcon={
          <Box>
            <Button onPress={toggleModal}>
              <SearchIcon />
            </Button>
            <Button onPress={doPickFile}>
              <AddIcon />
            </Button>
          </Box>
        }
      />
      <ModalFilter isVisible={isVisible} onBackdropPress={toggleModal} />
    </HeaderLayout>
  );
};

const Box = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-left: 10px;
`;
