"use client";

import { drinks } from "@/lib/api"
import { colors } from "@/lib/theme";
import Flex from "@/styledComponents/Flex";
import { useState, useEffect, useCallback } from "react"
import styled from "styled-components";
import { useDebounce } from "usehooks-ts"
import { FaSearch, FaTimesCircle } from "react-icons/fa";

interface ISearchProps {
  setResults: (results: any) => void
  setLoading: (loading: boolean) => void
}

const Search: React.FC<ISearchProps> = ({ setResults, setLoading }) => {
  const [drinkName, setDrinkName] = useState<string>('')
  const debouncedSearch = useDebounce<string>(drinkName, 500)

  const handleClearResults = useCallback(() => {
    setDrinkName('')
    setResults([])
  }, [setDrinkName, setResults])
  
  useEffect(() => {
    const searchDrinks = async () => {
      if (debouncedSearch) {
        setLoading(true)
        const data = await drinks.search(debouncedSearch)
        setLoading(false)
        if (!data?.drinks) {
          // TODO handle no results
          return
        }
        setResults(data.drinks)
      } else {
        setResults([])
      }
    }
    searchDrinks()
  }, [debouncedSearch, setResults, setLoading])

  return (
    <Container>
      <InputContainer>
        <StyledSearch />
        <Input
          type="text"
          placeholder="Search for a drink"
          value={drinkName}
          onChange={(e) => setDrinkName(e.target.value)}
        />
        {drinkName && <StyledClearIcon onClick={handleClearResults} />}
      </InputContainer>
    </Container>
  )
}

export default Search

const Container = styled(Flex)`
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid ${colors.grey};
`

const StyledSearch = styled(FaSearch)`
  color: ${colors.darkGrey};
  font-size: 12px;
`

const StyledClearIcon = styled(FaTimesCircle)`
  color: ${colors.darkGrey};
  font-size: 12px;
`

const InputContainer = styled(Flex)`
  position: relative;
  width: 100%;
  padding: 6px;
  background: ${colors.lightGrey};
  display: flex;
  border-radius: 4px;
  gap: 4px;
`

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  padding-left: 4px;
  font-size: 17px;
  color: ${colors.black};
  &:focus {
    outline: none;
  }
`