import styled from "styled-components";
const LayoutFooterWrapper = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-white);

  height: 30rem;
`;

const LayoutFooter = () => {
  return <LayoutFooterWrapper>Footer</LayoutFooterWrapper>;
};

export default LayoutFooter;
