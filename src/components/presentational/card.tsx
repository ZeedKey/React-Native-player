import React from 'react';
import {Body2, H2} from '~typography';
import styled from 'styled-components/native';
import {MusicIcon} from 'src/icons';

type Card = {
  uri?: string;
  onPress?: () => void;
  label?: string;
  description?: string;
};

export const Card: React.FC<Card> = ({onPress, label, description}) => {
  const isDisabled = typeof onPress === 'undefined';
  return (
    <Box onPress={onPress} disabled={isDisabled}>
      <MusicIcon width={96} height={96} />
      <Label>{label}</Label>
      <Description>{description}</Description>
    </Box>
  );
};

const Box = styled.Pressable`
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;
const Label = styled(H2)`
  margin-top: 25px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.size.lg};
  color: ${props => props.theme.color.secondary};
`;
const Description = styled(Body2)`
  font-size: ${props => props.theme.size.rg};
  color: ${props => props.theme.color.optional_1};
  text-transform: uppercase;
`;
