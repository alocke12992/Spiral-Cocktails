import styled from 'styled-components';

interface IFlex {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}


const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
`

export default Flex;
