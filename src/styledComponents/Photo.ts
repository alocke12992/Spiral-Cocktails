import Image from "next/image";
import styled from "styled-components";

const Photo = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export default Photo;
