import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

//center
export const _ScrollToSee = styled.div`
  /* grid-area: ScrollToSee; */
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
    /* align-self: center;
    justify-self: center; */
  opacity: 0.5;
  color: var(--gradient-light-blue);
  font-size: 22px;
  display: relative;
  transition: all 0.5s linear;
  & > span {
    margin-left: 10px;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);

    opacity: 0.7;
  }
`;

const ScrollToSee = ({className}) => {
  return (
    <_ScrollToSee className={className}>
      <FaAngleDown size={30} />
      <span>Scroll to see More Info</span>
    </_ScrollToSee>
  );
};

export default ScrollToSee;
