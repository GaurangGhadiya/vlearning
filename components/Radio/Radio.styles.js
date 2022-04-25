import styled from "styled-components";
import Radio from "./Radio";

export const RadioButton = styled(Radio)`
  position: relative;
  min-width: 80px;
  height: 48px;

  & > input {
    display: none;
  }

  & > label {
    padding: 0px 12px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid var(--gradient-light-blue);
    font-size: 24px;
    cursor: pointer;
  }

  & > label:hover {
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  }

  & > input:checked ~ label {
    border: 6px solid var(--gradient-light-blue);
  }

  & > [disabled] ~ label {
    cursor: not-allowed;
    color: darkgrey;
    border-color: darkgray;
    box-shadow: none;
  }
`;

export const RadioButton2 = styled(Radio)`
  display: flex;
  align-items: center;
  position: relative;
  /* background-color: yellow; */

  & > input {
    opacity: 0;
  }

  & > label {
    font-size: 25px;
    margin-left: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &::before {
      content: "";
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-sizing: border-box;
      /* background-color: red; */
      border: 10px solid var(--gradient-light-blue);
      z-index: 99;
      position: absolute;
      left: 0px;
      opacity: 0.31;
      transition: all 0.2s linear;
    }

    &::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      background-color: var(--gradient-light-blue);
      border-radius: 50%;
      box-sizing: border-box;
      left: 8.1px;
      transform: scale(0);
    }
  }

  & > input:checked ~ label {
    &::before {
      content: "";
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-sizing: border-box;
      /* background-color: red; */
      border: 5px solid var(--gradient-light-blue);
      z-index: 99;
      position: absolute;
      left: 0px;
      opacity: 1;
    }

    &::after {
      content: "";
      width: 12px;
      height: 12px;
      position: absolute;
      background-color: var(--gradient-light-blue);
      border-radius: 50%;
      box-sizing: border-box;
      left: 8.1px;
      transform: scale(1);
    }
  }

  & > [disabled] ~ label {
    color: darkgray;
    cursor: not-allowed;

    &::before {
      border: 5px solid gray;
    }
  }
`;
