import styled from "styled-components";
const HomeTestimonyWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  margin-bottom: 10rem;

  .temp {
    background-color: black;

    width: 60rem;
    height: 60rem;
  }

  .home-testimony--text p {
    width: 80rem;

    font-size: 2rem;
    font-style: italic;
  }

  .home-testimony--text p:nth-child(1) {
    margin-bottom: 0.5rem;
  }
`;

const HomeTestimony = () => {
  return (
    <HomeTestimonyWrapper>
      <div className="temp"></div>
      <div className="home-testimony--text">
        <p>
          &quot;The blank is a perfect blend of comfort and style. It&apos;s a bit expensive but worthwhile for what it
          offers. Probably my most used pair this year.&quot;
        </p>
        <p>- Raphael Roman</p>
      </div>
    </HomeTestimonyWrapper>
  );
};
export default HomeTestimony;
