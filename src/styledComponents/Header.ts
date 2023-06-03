import { colors } from '@/lib/theme'
import Flex from './Flex'
import styled from 'styled-components'

const Header = styled(Flex)`
  width: 100%;
  height: 70px;
  background-color: ${colors.grey};
  border-bottom: 1px solid ${colors.darkGrey};
  padding-bottom: 12px;
  flex-direction: column;
  justify-content: flex-end;

`

export default Header
