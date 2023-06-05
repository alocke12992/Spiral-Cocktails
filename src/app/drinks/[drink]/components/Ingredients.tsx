'use client'

import styled from 'styled-components';

import { Flex, Text } from '@/styledComponents';
import { IChartData, IIngredient } from '@/types';

import PieChart from './PieChart';

interface IIngredientsProps {
  ingredients: IIngredient[];
  chartData: IChartData[];
}

const Ingredients: React.FC<IIngredientsProps> = ({
  ingredients,
  chartData,
}) => {
  return (
    <Container>
      <Text align="left" bold>Ingredients:</Text>
      <DualContainer align="flex-start">
        <StyledList>
          {ingredients.length && ingredients.map((ingredient) => (
            <ListItem key={ingredient.name}>
              <BulletPoint color={ingredient.color} />
              {ingredient.name}
              {ingredient.measurement?.rawUnit && ` (${ingredient.measurement.rawUnit})`}
            </ListItem>
          ))}
        </StyledList>
        <PieChart chartData={chartData} />
      </DualContainer>
    </Container>
  )
}

export default Ingredients

const Container = styled.div`
  margin: 30px 0 20px;
  gap: 20px;
  width: 100%;
`

const DualContainer = styled(Flex)`
  width: 100%;
  gap: 20px;
  margin-bottom: 12px;
  min-height: 120px;
  align-items: flex-start;
  margin-top: 20px;
`

const StyledList = styled.ul`
  flex: 1;
`

const ListItem = styled.li`
  list-style: none;
  font-size: 17px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`

const BulletPoint = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  min-width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 4px;
`