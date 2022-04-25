import Image from "next/image";
import GirlStudying from "public/images/Home/GirlStudying.jpg";
import Button from "components/Button/Button";
import * as S from "./NewToSection.styles";

const NewToSection = () => {
  return (
    <S.Background>
      <S.Container>
        <S.ImgSection>
          <div className="imageContainer">
            <span>
              <Image
                src={GirlStudying}
                layout="fill"
                objectFit="contain"
                objectPosition="right bottom"
                priority="false"
                alt="Girl Studying"
              />
            </span>
          </div>
        </S.ImgSection>
        <S.TextButtonSection>
          <h1 className="newTo">
            New To VvLearnings?
            <br /> Lucky You.
          </h1>
          <p>
            Join now to get exclusive benefits. <br />
            Get your new student offer before they expire!
          </p>
          <S.Buttons>
            <Button btnStyle="yellow">Register Now</Button>
            <Button>Browse Courses</Button>
          </S.Buttons>
        </S.TextButtonSection>
      </S.Container>
    </S.Background>
  );
};

export default NewToSection;
