import styled from "styled-components";
const LayoutFooterWrapper = styled.footer`
  background-color: var(--color-primary);
  color: var(--color-white);

  height: 30rem;
`;

const LayoutFooter = () => {
  return (
    <LayoutFooterWrapper>
      <p>Like what you see? Check me out!</p>
    </LayoutFooterWrapper>
  );
};

export default LayoutFooter;
