import React from 'react';
import {Button} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {usePlayer} from 'src/hooks';

type ModalOptionsType = {
  posX: number;
  posY: number;
  isVisible: boolean;
  onClose: () => void;
  onAddClick: () => void;
  onRemoveClick: () => void;
  onDeleteClick: () => void;
};

export const ModalOptions: React.FC<ModalOptionsType> = ({
  isVisible,
  onClose,
  posX,
  posY,
  onAddClick,
  onRemoveClick,
  onDeleteClick,
}) => {
  const {add} = usePlayer();

  return (
    <ReactNativeModal
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={{
        width: 300,
        backgroundColor: 'white',
        position: 'absolute',
        left: posX,
        top: posY,
        borderRadius: 10,
      }}
      backdropColor="transparent">
      <Button title="Add to the queue" onPress={onAddClick} />
      <Button title="Remove from the queue" onPress={onRemoveClick} />
      <Button title="Delete" onPress={onDeleteClick} />
    </ReactNativeModal>
  );
};
