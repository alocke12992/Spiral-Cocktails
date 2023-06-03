import Image from "next/image";
import styled from "styled-components";

const BaseThumbnail = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-right: 15px;
`;

export const SmallThumbnail = styled(BaseThumbnail)`
  width: 40px;
  height: 40px;
`;

export const LargeThumbnail = styled(BaseThumbnail)`
  width: 150px;
  height: 150px;
`;
