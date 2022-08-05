import React from 'react';
import ReactNativeModal, {ModalProps} from 'react-native-modal';

export const Modal: React.FC<ModalProps> = props => {
  return (
    <ReactNativeModal {...props} backdropColor="transparent">
      {props.children}
    </ReactNativeModal>
  );
};
