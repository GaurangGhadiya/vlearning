import styled from "styled-components";
import ScrollToSee from "@shared/ScrollToSee/ScrollToSee";

export const Container = styled.div`
  &::before {
    content: "";
    background-image: linear-gradient(
      to right bottom,
      hsla(198, 100%, 24%, 0.09),
      hsl(186, 100%, 29%, 0.09)
    );
    box-sizing: border-box;
    position: absolute;
    z-index: -1;
    width: calc(100vw - 16px);
    height: 100%;
    top: 0px;
    left: px;
    align-self: center;
    justify-self: center;
  }

  height: calc(100vh - 190px);
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 0.52fr 0.58fr;
  grid-template-rows: fit-content(1ch) 1fr fit-content(100ch);
  width: 95%;
  position: relative;
  padding-top: 40px;
  padding-bottom: 8px;
`;

export const GetTheEdge = styled.div`
  grid-column: 1/-1;
  grid-row: 1/2;
  /* grid-area: getTheEdge; */
  font-size: 86px;
  font-weight: 500;
  color: #4d4d4d;
  justify-self: end;
  z-index: 1;
`;

export const ImageSection = styled.div`
  position: relative;
  grid-column: 1/2;
  grid-row: 1/3;
`;

export const TextSection = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
`;

export const ShScrollToSee = styled(ScrollToSee)`
  grid-column: 1/3;
  grid-row: 3/4;
  margin-top: 68px;
  /* padding-top: 40px; */
  /* background-color: pink; */
`;

//not top level
export const CrackTheExam = styled.p`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;

  flex-grow: 3;
  font-size: 30px;
  font-weight: 600;
  white-space: pre-line;
  color: #4d4d4d;
  margin-bottom: 50px;

  & strong {
    font-size: 58px;
    font-weight: 700;
    padding: 0px 10px;
  }

  & span:first-of-type > strong {
    color: var(--gradient-light-blue);
    text-shadow: -4px 2px var(--primary-yellow);
  }

  & span:last-of-type > strong {
    color: var(--primary-yellow);
    text-shadow: -4px 3px var(--gradient-light-blue);
  }
`;

//not top level
export const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-right: 50px;
`;
