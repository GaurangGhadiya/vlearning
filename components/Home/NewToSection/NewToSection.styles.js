import styled from "styled-components";

export const Background = styled.div`
  height: calc(100vh - 265px);
`;
export const Container = styled.div`
  height: 100%;
  max-width: 1400px;
  width: 95%;
  margin: auto;
  display: grid;
  align-content: center;
  column-gap: 70px;
  grid-template-columns: 1fr 1fr;
`;
export const ImgSection = styled.div`
  /* background-color: pink; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  & > .imageContainer {
    position: relative;
    /* background-color: red; */
    /* border: 4px solid red; */
    display: flex;
    width: 100%;
    height: 80%;

    &::after{
      content: " ";
      box-sizing: border-box;
      position: absolute;
      width: 92%;
      height: 100%;
      border: 8px solid var(--gradient-light-blue);
      right: 0px;

    }

    &::before {
      content: " ";
      position: absolute;
      width: 420px;
      height: 420px;
      border: 5px solid var(--primary-yellow);
      border-radius: 50%;
      bottom: 0px;
    }
  }
`;
export const TextButtonSection = styled.div`
  display: grid;
  row-gap: 70px;
  & > .newTo {
    font-size: 45px;
    font-weight: 600;
    text-shadow: -4px -4px var(--primary-yellow);
    color: hsl(0, 0%, 20%);
  }

  & p {
    font-size: 20px;
    font-weight: 500;
  }
`;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
`;
