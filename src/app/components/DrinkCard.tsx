import { IDrink } from '@/types/drinks';
import Flex from '../../styledComponents/Flex';
import Text from '../../styledComponents/Text';
import styled from 'styled-components';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import { colors } from '@/lib/theme';
import { useRouter } from 'next/navigation';

const DrinkCard: React.FC<IDrink> = ({ strDrink, idDrink, strDrinkThumb }) => {
  const router = useRouter();

  return (
    <Container
      justify="space-between"
      onClick={() => router.push(`/drinks/${idDrink}`)}
    >
      <Flex justify='flex-start'>
        <StyledImage
          src={`${strDrinkThumb}/preview`}
          alt={`${strDrink}-thumbnail`}
          height={40}
          width={40}
        />
        <Text>{strDrink}</Text>
      </Flex>
      <FaChevronRight />
    </Container>
  );
}

export default DrinkCard;

const Container = styled(Flex)`
  border-top: 1px solid ${colors.grey};
  padding: 10px;
  height: 60px;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 15px;
`
