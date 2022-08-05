import React from 'react';
import {H2} from '~typography';
import styled from 'styled-components/native';

type NavBarProps = {
  StartIcon?: JSX.Element;
  EndIcon?: JSX.Element;
  children?: string;
};

export const NavBar: React.FC<NavBarProps> = ({
  StartIcon,
  EndIcon,
  children,
}) => {
  return (
    <Box>
      <Icon>{StartIcon}</Icon>
      <Title>{children}</Title>
      <Icon>{EndIcon}</Icon>
    </Box>
  );
};

const Box = styled.View`
  width: 100%;
  text-align: center;
  justify-content: space-between;
  flex-direction: row;
`;
const Title = styled(H2)`
  font-size: ${props => props.theme.size.md};
  color: ${props => props.theme.color.secondary};
`;
const Icon = styled.View`
  width: 100px;
`;
