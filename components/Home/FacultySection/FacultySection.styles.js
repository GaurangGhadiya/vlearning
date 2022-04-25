import styled from "styled-components";

export const Background = styled.div`
  height: 105vh;
  background-image: linear-gradient(
    to right top,
    #008494,
    #007990,
    #006d8b,
    #006284,
    #00567c
  );
`;
export const Container = styled.div`
  max-width: 1400px;
  height: calc(100% - 100px - 30px);
  /* background-color: orange; */
  width: 95%;
  margin: auto;
  color: white;
  /* padding-top: 40px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Heading = styled.div`
  font-size: 50px;
  font-weight: 600;
  padding-left: 30px;
  border-left: 20px solid var(--primary-yellow);
`;

export const FacultyScroll = styled.div`
  height: 162px;
  display: grid;
  grid-template-columns: repeat(5, 150px);
  column-gap: 50px;

  & > .faculty {
    border: 4px solid white;
    border-radius: 5px;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & > .facultyImage {
      background-color: var(--primary-yellow);
      width: 88px;
      height: 94px;
      border-radius: 5px;
    }
    & > .facultyName {
      text-align: center;
      font-size: 12px;
      z-index: 99;
    }
  }
`;

export const ImageText = styled.div`
  display: grid;
  grid-template-columns: fit-content(400px) 1fr;
  column-gap: 20px;
`;
export const WorkingLady = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  flex-grow: 1;
  /* border: 1px solid white; */
  justify-self: start;
  z-index: 5;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--gradient-light-blue);
    border-radius: 50%;
    left: 8px;
    bottom: -8px;
    z-index: -1;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--primary-yellow);
    border-radius: 50%;
    left: 16px;
    bottom: -16px;
    z-index: -2;
  }
`;
export const TakeTheNext = styled.div`
  text-align: end;
  font-size: 48px;
  font-weight: 500;
  flex-grow: 1;
  /* border: 1px solid white; */
  margin-left: 20px;
  margin-top: 20px;
  justify-self: flex-end;
  & > strong {
    color: var(--primary-yellow);
  }
`;
export const Propositions = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  height: 100px;

  & .propositionsContainer {
    max-width: 1400px;
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: space-between;
    justify-content: space-between;
  }

  & .propositionItem {
    /* background-color: red; */
    display: grid;
    grid-template-columns: 45px fit-content(280px);
    column-gap: 20px;
    align-items: center;
    justify-content: center;
    /* background-color: red; */

    &:first-child {
      justify-self: flex-start;
    }

    &:last-child {
      justify-self: flex-end;
    }

    & > p {
      font-weight: 600;
      color: hsl(0, 0%, 30%);
    }
  }

  & .propIconContainer {
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 4px solid var(--gradient-light-blue);
  }

  & .propIcon {
    /* background-color: pink; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gradient-light-blue);
    transform: scale(1.4);
  }
`;
