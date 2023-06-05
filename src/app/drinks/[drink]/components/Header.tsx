'use client';

import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import { Flex, Text, TopBar } from '@/styledComponents';
import { colors } from '@/lib/theme';

interface IHeaderProps {
  drinkName: string;
}

const Header: React.FC<IHeaderProps> = ({ drinkName }) => {
  const router = useRouter();

  return (
    <TopBar>
      <TitleContainer>
        <Button onClick={() => router.push('/')}>
          <FaChevronLeft />
          <Text>Thirsty</Text>
        </Button>
        <Text>{drinkName}</Text>
      </TitleContainer>
    </TopBar>
  )
}

export default Header

const TitleContainer = styled(Flex)`
  position: relative;
  width: 100%;
`

const Button = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${colors.blue};

  & ${Text} {
    color: ${colors.blue};
  }

  &:hover {
    cursor: pointer;
  }
`