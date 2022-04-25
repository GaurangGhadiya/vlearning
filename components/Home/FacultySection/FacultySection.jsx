import Image from "next/image";
import WorkingLadySvg from "public/images/Home/WorkingLady.svg";
import { FaVideo, FaGraduationCap } from "react-icons/fa";
import { GiArrowCursor } from "react-icons/gi";
import * as S from "./FacultySection.styles";

const FacultySection = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Heading>Top Experts Faculty</S.Heading>
        <S.FacultyScroll>
          <div className="faculty">
            <div className="facultyImage"></div>
            <div className="facultyName">CA Abhay Bhanot</div>
          </div>
          <div className="faculty">
            <div className="facultyImage"></div>
            <div className="facultyName">CA Abhay Bhanot</div>
          </div>
        </S.FacultyScroll>
        <S.ImageText>
          <S.WorkingLady>
            <Image src={WorkingLadySvg} layout="fill" priority="false" alt="Working Lady" />
          </S.WorkingLady>
          <S.TakeTheNext>
            Take The <strong>next step</strong> toward your personal and
            professional goals with <strong>Vvlearnings</strong>
          </S.TakeTheNext>
        </S.ImageText>
      </S.Container>
      <S.Propositions>
        <div className="propositionsContainer">
          <div className="propositionItem">
            <div className="propIconContainer">
              <FaVideo className={["propIcon", "video"].join(" ")} />
            </div>
            <p>Learn in Demand skill with over 10000 hours of video content</p>
          </div>
          <div className="propositionItem">
            <div className="propIconContainer">
              <FaGraduationCap
                className={["propIcon", "graduation"].join(" ")}
              />
            </div>
            <p>Choose courses taught by real-world Experts</p>
          </div>
          <div className="propositionItem">
            <div className="propIconContainer">
              <GiArrowCursor className={["propIcon", "cursor"].join(" ")} />
            </div>
            <p>
              Learn at your own pace, with our broad selection of access option
            </p>
          </div>
        </div>
      </S.Propositions>
    </S.Background>
  );
};

export default FacultySection;
