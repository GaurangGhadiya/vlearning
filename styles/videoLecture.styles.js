import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  width: 95%;
  max-width: 1400px;
  margin: auto;
  padding-top: 40px;
  height: calc(100vh - 190px);
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;
  column-gap: 90px;
  row-gap: 30px;
`;

// Left
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductCard = styled.div`
  /* background-image: linear-gradient(
    to bottom right,
    hsla(var(--gradient-dark-blue)),
    hsla(var(--gradient-light-blue))
  ); */
  background-image: linear-gradient(
    to bottom right,
    hsla(198, 100%, 24%, 0.85),
    hsla(186, 100%, 29%, 0.85)
  );

  color: white;
  padding: 30px;
  border-radius: 5px;
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  /* grid-template-rows: 1fr 1fr auto; */
  grid-template-areas:
    "teacherImage teacherName"
    "teacherImage examAndBatch"
    "lectureWithBook lectureWithBook"
    "subjectName subjectName";
  column-gap: 30px;
  row-gap: 30px;

  & .teacherImage {
    grid-area: teacherImage;
    width: 140px;
    height: 150px;
    background-color: var(--primary-yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
  & .teacherName {
    grid-area: teacherName;
    font-size: 28px;
    font-weight: 600;
    margin-right: 60px;
    /* background-color: pink; */
  }
  & .examAndBatch {
    grid-area: examAndBatch;
    font-size: 22px;
    font-weight: 400;
  }
  & .lectureWithBook {
    grid-area: lectureWithBook;
    background-color: var(--primary-yellow);
    justify-self: start;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 22px;
    width: 70%;
    text-align: center;
    padding: 5px 0px;
    border-radius: 0px 5px 5px 0px;
  }
  & .subjectName {
    grid-area: subjectName;
    font-size: 27px;
    font-weight: 600;
  }
  & .ribbon {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 140px;
    height: 140px;
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & .hours {
      background-color: var(--primary-yellow);
      color: black;
      width: 170%;
      height: 40px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(45deg) translateY(-20px);
      font-size: 20px;
      font-weight: 600;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ActionButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

// right
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

export const Prices = styled.div`
  display: flex;

  & .price {
    margin-right: 22px;
    color: var(--gradient-light-blue);
    font-size: 36px;
  }
  & .undiscounted {
    margin-left: 22px;
    color: black;
    font-size: 36px;
    text-decoration: line-through;
  }
`;

export const Views = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & .optionHead {
    width: 100%;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const Quantity = styled.div`
  display: none;
`;

export const Validity = styled.div`
  display: flex;
  flex-wrap: wrap;

  & .optionHead {
    width: 100%;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  & > * :not(.optionHead) {
    margin-right: 30px;
  }
`;

export const Videos = styled.div`
  display: flex;
  align-items: center;
  & .optionHead {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    width: 150px;
  }

  & > * {
    margin-right: 20px;
  }
`;

export const StudyMaterial = styled.div`
  display: flex;
  align-items: center;
  & .optionHead {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    width: 150px;
  }

  & > * {
    margin-right: 20px;
  }
`;


