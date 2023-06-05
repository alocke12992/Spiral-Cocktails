import { colors } from '@/lib/theme'
import Flex from './Flex'
import styled from 'styled-components'

const TopBar = styled(Flex)`
  width: 100%;
  height: 70px;
  background-color: ${colors.lightGrey};
  border-bottom: 1px solid ${colors.darkGrey};
  padding: 10px;
  flex-direction: column;
  justify-content: flex-end;
`

export default TopBar
