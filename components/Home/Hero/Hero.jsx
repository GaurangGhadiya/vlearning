import Button from "../../Button/Button";
import * as S from "./Hero.style";
import { FaBook, FaVideo } from "react-icons/fa";
import Image from "next/image";
import ReadingMan from "public/images/Home/ReadingMan.svg";

const Hero = () => {
  return (
    <S.Container>
      <S.GetTheEdge>Get the edge you need</S.GetTheEdge>
      <S.ImageSection>
        <Image
          src={ReadingMan}
          layout="fill"
          objectFit="contain"
          objectPosition="left top"
          alt="Reading Man"
        />
        {/* <Image src="/images/Home/ReadingMan.svg" layout="fill"/> */}
      </S.ImageSection>
      <S.TextSection>
        <S.CrackTheExam>
          <span>
            Crack The&nbsp;<strong>Exam</strong>
          </span>
          <span>
            in your&nbsp;<strong>First</strong>&nbsp;Attempt
          </span>
        </S.CrackTheExam>
        <S.ButtonDiv>
          <Button btnStyle="yellow" stretch={true}>
            <FaVideo />
            Video Lecture
          </Button>
          <Button stretch={true}>
            <FaBook />
            Browse Books
          </Button>
        </S.ButtonDiv>
      </S.TextSection>
      <S.ShScrollToSee />
    </S.Container>
  );
};

export default Hero;
