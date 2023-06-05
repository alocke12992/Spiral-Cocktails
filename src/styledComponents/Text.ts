import styled from 'styled-components'

const Text = styled.p<{ bold?: boolean; align?: string; fontSize?: number }>`
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: #000;
  font-size: ${({ fontSize }) => fontSize ? fontSize : 17 }px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 400)}};
  text-align: ${({ align }) => align || 'center'};
`

export default Text