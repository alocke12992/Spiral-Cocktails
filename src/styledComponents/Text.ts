import styled from 'styled-components'

const Text = styled.p<{ bold?: boolean; align?: string }>`
  font-size: 17px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  color: #000;
  font-weight: ${({ bold }) => (bold ? 'bold' : 400)}};
  text-align: ${({ align }) => align || 'center'};
`

export default Text