import styled from "styled-components";

export const InfoSection = styled.div`
  background-color: #fafafa;
  border-left: 1px solid #e1e1e1;
  padding-left: 44px;

  & > * {
    max-width: 500px;
  }

  & > *:not(div:last-child) {
    border-bottom: 2px solid #e1e1e1;
  }
`;

export const Products = styled.div`
  & > .product {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 35px 35px;
    grid-gap: 10px;
    grid-template-areas:
      "productImage productName deleteProduct"
      "productImage description price";
    margin-bottom: 20px;

    & > .image {
      grid-area: productImage;
      background-color: #f1b900;
    }

    & > h5 {
      grid-area: productName;
      font-size: 14px;
      font-weight: 600;
      color: #323232;
    }

    & > .description {
      grid-area: description;
      font-size: 12px;
      color: #717171;
    }

    & > .deleteProduct {
      grid-area: deleteProduct;
      justify-self: end;
      align-self: start;
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      align-items: start;
      border-radius: 50%;
      transform: rotate(45deg);
      /* padding: 4px */
      font-size: 30px;
      color: hsl(0, 0%, 50%);
      border: none;
      background-color: transparent;

      &:hover{
        color: red;
      }

    }
    & > .productPrice {
      grid-area: price;
      align-self: center;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

export const Coupon = styled.div`
  display: flex;
  padding: 30px 0px;

  & > div {
    flex-grow: 2;
    margin-right: 10px;
  }
  & > button {
    background-color: black;
    color: white;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    padding: 0px 20px;
    margin-left: 10px;
  }
`;

export const BillBreakDown = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px 0px;

  & > p:nth-child(2n) {
    justify-self: end;
  }
`;
export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;
