import * as S from "../styles/videoLecture.styles";
import ScrollToSee from "../components/shared/ScrollToSee/ScrollToSee";
import { RadioButton, RadioButton2 } from "../components/Radio/Radio.styles";

import { useState } from "react";
import { FaShoppingCart, FaCoins } from "react-icons/fa";

import Button from "../components/Button/Button";

const VideoLecture = () => {
  const teacherName = "CA Abhay Bhanot";
  const examName = "CA Foundation";
  const batch = "Regular";
  const subjectName =
    "Business Mathematics, Logical Reasoning and Statistics Regular";
  const hours = 117;
  const price = 7999;

  const buyNow = () => "";
  const buyNowLoading = false;
  const addToCart = () => "";
  const addToCartLoading = false;

  const [views, setViews] = useState("");
  const [validity, setValidity] = useState("");
  const [videos, setVideos] = useState("");
  const [studyMaterial, setStudyMaterial] = useState("");
  //  id, format, isCombo, price, studyMaterial, validity, view, batch,
  // startDate, endDate, hours, subjectName, examName, teacherName, url.
  return (
    <S.Container>
      <S.Main>
        {/* left div */}
        <S.Left>
          <S.ProductCard>
            <div className="teacherImage">teacher Image</div>
            <h2 className="teacherName">{teacherName}</h2>
            <p className="examAndBatch">{`${examName} / ${batch}`}</p>
            <p className="lectureWithBook">Lectures With Book</p>
            <p className="subjectName">{subjectName}</p>
            <div className="ribbon">
              <p className="hours">{`${hours} Hours`}</p>
            </div>
          </S.ProductCard>
          <S.ActionButton>
            <Button
              className="buyNow"
              onClick={buyNow}
              loading={buyNowLoading}
              btnStyle="yellow"
              stretch={true}
            >
              <FaCoins size={30} color="black" /> Buy Now
            </Button>
            <Button
              className="addToCart"
              onClick={addToCart}
              loading={addToCartLoading}
              stretch={true}
            >
              <FaShoppingCart size={25} color="white" /> Add To Cart
            </Button>
          </S.ActionButton>
        </S.Left>

        {/* right div */}
        <S.Right>
          <S.ProductName>{`${examName} ${subjectName} ${batch}`}</S.ProductName>
          <S.Prices>
            <h2 className="price">{`₹ ${price}`}</h2>
            <h2 className="undiscounted">{`₹ ${parseInt(price * 1.1)}`}</h2>
          </S.Prices>

          <S.Views>
            <p className="optionHead">Views</p>
            <RadioButton
              value={2}
              valueExtension="x"
              name="views"
              option={views}
              setOption={(e) => setViews(e.target.value)}
            />
            <RadioButton
              value={1.5}
              valueExtension="x"
              name="views"
              option={views}
              setOption={(e) => setViews(e.target.value)}
            />
            <RadioButton
              value={1.2}
              valueExtension="x"
              name="views"
              option={views}
              setOption={(e) => setViews(e.target.value)}
            />
          </S.Views>

          <S.Quantity></S.Quantity>

          <S.Validity>
            <p className="optionHead">Validity</p>
            <RadioButton
              value={12}
              valueExtension="Months"
              name="validity"
              option={validity}
              setOption={(e) => setValidity(e.target.value)}
            />
            <RadioButton
              value={8}
              valueExtension="Months"
              name="validity"
              option={validity}
              setOption={(e) => setValidity(e.target.value)}
            />
            <RadioButton
              value={4}
              valueExtension="Months"
              name="validity"
              option={validity}
              setOption={(e) => setValidity(e.target.value)}
            />
          </S.Validity>

          <S.Videos>
            <p className="optionHead">Videos</p>
            <RadioButton2
              value="USB"
              valueExtension=""
              name="videos"
              option={videos}
              setOption={(e) => setVideos(e.target.value)}
            />
            <RadioButton2
              value="Download"
              valueExtension=""
              name="videos"
              option={videos}
              setOption={(e) => setVideos(e.target.value)}
            />
          </S.Videos>
          <S.StudyMaterial>
            <p className="optionHead">Study Material</p>
            <RadioButton2
              value="SoftCopy"
              valueExtension=""
              name="studyMaterial"
              option={studyMaterial}
              setOption={(e) => setStudyMaterial(e.target.value)}
            />
            <RadioButton2
              value="HardCopy"
              valueExtension=""
              name="studyMaterial"
              option={studyMaterial}
              setOption={(e) => setStudyMaterial(e.target.value)}
            />
          </S.StudyMaterial>
        </S.Right>
        {/* scroll to see more remaining */}
        <ScrollToSee />
      </S.Main>
    </S.Container>
  );
};
export default VideoLecture;
