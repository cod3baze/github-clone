import styled from 'styled-components';

export const Container = styled.div`
  --horizontal-padding: 16px;
  --vertical-padding: 24px;

  padding: var(--vertical-padding) var(--horizontal-padding);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1100px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const  LeftSide = styled.div`
  padding: 0 var(--horizontal-padding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const  RightSide = styled.div`
  padding: 0 var(--horizontal-padding);

  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--vertical-padding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;

    display: grid;
    grid-gap: 16px;

    grid-template-columns: 1fr;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;
