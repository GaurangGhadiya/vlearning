import styled from "styled-components";

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 5px;
  background-color: orange;

  & > input {
    height: 100%;
    width: 100%;
    border: 1px solid #d9d9d9;
    border-radius: inherit;
    padding: 0px 15px;
    font-size: 16px;
    font-weight: 400;
    /* background-color: orange; */
  }

  & > label {
    font-size: 14px;
    color: #737373;
    padding-left: 15px;
    position: absolute;
    /* background-color: pink; */
    opacity: 0;
    pointer-events: none;
  }

  & > input:not(:placeholder-shown) {
    animation: move-down 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
  }

  & > input:not(:placeholder-shown) ~ label {
    animation: move-up 1s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards;
  }

  @keyframes move-down {
    to {
      padding-top: 18px;
    }
  }

  @keyframes move-up {
    25% {
      opacity: 100%;
    }
    to {
      transform: translateY(-12px);
      opacity: 100%;
    }
  }
`;
