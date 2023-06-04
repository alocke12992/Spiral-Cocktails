"use client";

import { useState } from 'react'
import Search from './components/Search';
import DrinkCard from './components/DrinkCard';
import { IDrink } from '@/types/drinks';
import styled from 'styled-components';
import Text from '@/styledComponents/Text';
import Header from '@/styledComponents/Header';
import PageContainer from '@/styledComponents/PageContainer';

export default function Home() {
  const [results, setResults] = useState<IDrink[]>([])
  const [loading, setLoading] = useState(false)
  return (
    <PageContainer>
        <Header>
          <Text>Thirsty</Text>
        </Header>
        <Search setResults={setResults} setLoading={setLoading} />
        <DrinksContainer>
          {results?.length ? results.map((drink) => (
            <DrinkCard key={drink.idDrink} {...drink} />
            )
          ) : loading ? (
            <Text>Loading...</Text>
          ) : null}
        </DrinksContainer>
      </PageContainer>
  )
}


const DrinksContainer = styled.div`
  overflow: scroll;
  width: 100%;
`