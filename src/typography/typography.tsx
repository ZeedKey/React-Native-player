import styled from 'styled-components/native';

const TextBase = styled.Text`
  font-size: ${props => props.theme.size.rg};
  color: ${props => props.theme.color.secondary};
  font-style: normal;
  font-family: ${props => props.theme.font.regular};
`;

export const H1 = styled(TextBase)`
  font-size: ${props => props.theme.size.xxxl};
`;
export const H2 = styled(TextBase)`
  font-size: ${props => props.theme.size.xl};
`;
export const H3 = styled(TextBase)`
  font-size: ${props => props.theme.size.md};
`;
export const Body1 = styled(TextBase)`
  font-size: ${props => props.theme.size.rg};
`;
export const Body2 = styled(TextBase)`
  font-size: ${props => props.theme.size.sm};
`;
export const Body3 = styled(TextBase)`
  font-size: ${props => props.theme.size.xsm};
`;
