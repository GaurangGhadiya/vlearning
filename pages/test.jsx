import { useState } from "react";
import styled from "styled-components";
import Cart from "../components/Cart/Cart";

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  /* background-color: lightgray; */
  height: 100vh;

  & > .vl {
    border: 0.5px solid lightgray;
    height: 100%;
    position: absolute;
  }

  & > .hl {
    border: 0.5px solid lightgray;
    width: 100%;
    position: absolute;
  }
`;

const Test = () => {
  // const [loading, setLoading] = useState(false);

  // const getdata = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     console.log("this is somedata");
  //   }, 4000);
  // };

  const [hidden, setHidden] = useState(false);

  return (
    <Container>
      {/* <div className="vl"></div> */}
      {/* <div className="hl"></div> */}
      {/* <S.RadioButton2 value={1.2} valueExtension="Months" name="views" disabled={true}/> */}
      <Cart hidden={hidden} setHidden={setHidden} />
      {/* <button onClick={() => setHidden(!hidden)}>show cart</button> */}
    </Container>
  );
};

Test.getLayout = (page) => page;

export default Test;
