import styled, { css } from "styled-components";
import InfoSection from "../Checkout/InfoSection";

import Button from "../Button/Button";

export const Cart = styled.div`
  /* background-color: lightgray; */
  background-color: #fafafa;
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100vh;
  min-width: 480px;
  width: 30%;
  padding: 30px 20px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #e1e1e1;
  transition: all .5s linear;
  box-shadow: -0px 0px 10px 2px darkgray ;

  ${(props) =>
    props.hidden &&
    css`
      transform: translateX(600px);
    `}
`;

export const CartHead = styled.h2`
  font-size: 28px;
  border-bottom: 1px solid #e1e1e1;
  font-weight: 600;
  color: hsl(0, 0%, 30%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    border: none;
    color: transparent;
    background-color: transparent;
  }

  & .closeIcon {
    color: hsl(0, 0%, 50%);
    &:hover {
      color: red;
    }
  }
`;

export const CartInfoSection = styled(InfoSection)`
  padding-left: 0px;
  padding-right: 0px;
  border-left: none;

  flex-grow: 1;
  padding-top: 20px;
  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    //chrome
    display: none;
  }

  /* ${S.Products} {
    background-color: pink;
  } */
`;

export const CheckoutButton = styled(Button)``;
