'use client';

import styled from 'styled-components';

import { Text, Flex, Photo } from '@/styledComponents';

interface IDrinkPhoto {
  drinkName: string;
  drinkImage: string;
}

const DrinkPhoto: React.FC<IDrinkPhoto> = ({
  drinkName,
  drinkImage,
}) => {
  return (
    <Container direction="column">
      <Photo
        src={`${drinkImage}/preview`}
        alt={`${drinkName}-thumbnail`}
        height={150}
        width={150}
      />
      <Text bold fontSize={20}>{drinkName}</Text>
    </Container>
  )
}

export default DrinkPhoto;

const Container = styled(Flex)`
  margin-top: 30px;
  gap: 20px;
  width: 100%;
`