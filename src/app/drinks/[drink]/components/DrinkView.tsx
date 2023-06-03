'use client';

import Image from "next/image"
import { FaChevronLeft } from 'react-icons/fa';
import styled from "styled-components";
import PieChart from "./PieChart";
import Flex from "@/styledComponents/Flex";
import Header from "@/styledComponents/Header";
import Text from "@/styledComponents/Text";
import PageContainer from "@/styledComponents/PageContainer";
import { IDrink } from "@/types/drinks";
import { IChartData, IIngredient } from "../types";
import { useRouter } from "next/navigation";

interface IDrinkPageProps {
  drinkData: IDrink;
  chartData: IChartData[];
  ingredients: IIngredient[];
}

const DrinkView: React.FC<IDrinkPageProps> = ({ drinkData, chartData, ingredients }) => {
  const router = useRouter();

  return (
    <PageContainer>
    <Header>
      <TitleContainer>
        <BackButton onClick={() => router.push('/')}>
            <FaChevronLeft />
            <Text>Thirsty</Text>
        </BackButton>
        <Text>{drinkData.strDrink}</Text>
      </TitleContainer>
    </Header>
    <Content direction="column">
      <StyledImage
        src={`${drinkData.strDrinkThumb}/preview`}
        alt={`${drinkData.strDrink}-thumbnail`}
        height={150}
        width={150}
      />
      <Text bold>{drinkData.strDrink}</Text>
      <LeftAlignedText bold>Ingredients</LeftAlignedText>
      <DualContainer>
        <StyledList>
          {ingredients.length && ingredients.map((ingredient) => (
            <ListItem
              key={ingredient.name}
              color={ingredient.color}
            >
              {ingredient.name}
              {ingredient.measurement?.rawUnit && ` (${ingredient.measurement.rawUnit})`}
            </ListItem>
          ))}
        </StyledList>
        <PieChartContainer>
          <PieChart chartData={chartData} />
        </PieChartContainer>
      </DualContainer>
      <Description>
        {drinkData.strInstructions}
      </Description>
    </Content>
  </PageContainer>
  )
}

export default DrinkView


const TitleContainer = styled(Flex)`
  position: relative;
  width: 100%;
`

const LeftAlignedText = styled(Text)`
  align-self: start;
`

const Description = styled(Text)`
  font-size: 14px;
  text-align: left;
  align-self: start;
`

const Content = styled(Flex)`
  padding: 12px;
  gap: 16px;
  width: 100%;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`

const BackButton = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`

const DualContainer = styled(Flex)`
  width: 100%;
  gap: 4px;
  margin-bottom: 12px;
`

const StyledList = styled.ul`
  width: 60%;
`

const ListItem = styled.li<{ color: string }>`
  list-style: none;
  font-size: 12px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  &:before {
    content: ' ';
    background-color: ${({ color }) => color};
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    margin-right: 4px;
  }
`

const PieChartContainer = styled.div`
  width: 40%;
  height: 100%;
`;

