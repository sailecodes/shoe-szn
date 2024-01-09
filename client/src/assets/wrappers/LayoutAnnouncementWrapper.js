import styled from "styled-components";

const LayoutAnnouncementWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-primary);
  color: var(--color-white);

  height: 5rem;

  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.5px;

  padding: 0 var(--padding-side);

  @media (min-width: 530px) {
    font-size: 1.4rem;
  }
`;

export default LayoutAnnouncementWrapper;
