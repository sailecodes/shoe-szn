import { SiNewyorktimes, SiKik, SiJbl, SiSony, SiAmazon, SiNotion } from "react-icons/si";

import styled from "styled-components";

const HomeSponsorsWrapper = styled.section`
  color: var(--color-primary);

  margin-bottom: 10rem;

  p {
    font-size: var(--font-size-7);
    font-weight: 500;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
`;

const HomeSponsors = ({ color }) => {
  return (
    <HomeSponsorsWrapper>
      {/* <p>Our sponsors</p> */}
      <div>
        <SiAmazon
          size={100}
          color={color}
        />
        <SiKik
          size={140}
          color={color}
        />
        <SiJbl
          size={130}
          color={color}
        />
        <SiSony
          size={180}
          color={color}
        />
        <SiNewyorktimes
          size={100}
          color={color}
        />
        <SiNotion
          size={100}
          color={color}
        />
      </div>
    </HomeSponsorsWrapper>
  );
};
export default HomeSponsors;
