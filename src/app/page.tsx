'use client';

import { useState } from 'react'
import styled from 'styled-components';

import { IDrink } from '@/types';
import { Text, TopBar, Wrapper } from '@/styledComponents';

import Search from './components/Search';
import DrinkCard from './components/DrinkCard';

export default function Home() {
  const [results, setResults] = useState<IDrink[]>([])
  const [loading, setLoading] = useState(false)

  return (
    <Wrapper>
      <TopBar>
        <Text>Thirsty</Text>
      </TopBar>
      <Search setResults={setResults} setLoading={setLoading} />
      <DrinksContainer>
        {results?.length ? results.map((drink) => (
          <DrinkCard key={drink.idDrink} {...drink} />
          )
        ) : loading ? (
          <Text>Loading...</Text>
        ) : null}
      </DrinksContainer>
    </Wrapper>
  )
}


const DrinksContainer = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  /* Additional padding to compensate for TopBar and Search */
  padding-bottom: 124px;
`