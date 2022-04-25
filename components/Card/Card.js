import Image from "next/image";
import Ribbon from "./Ribbon";
import IconBtn from "./IconBtn";
import FormatIcon from "./FormatIcon";

import s from "../../styles/Card.module.scss";
import {
  FaEye,
  FaShoppingCart,
  FaPhone,
  FaShare,
  FaWhatsapp,
  FaDownload,
  FaBook,
} from "react-icons/fa";
import { AiFillUsb } from "react-icons/ai";
import { SiBmcsoftware } from "react-icons/si";



const Card = ({ product }) => {
  const format = product.format;
  const isCombo = product.isCombo;
  const price = product.price;
  const studyMaterial = product.studyMaterial;
  const validity = product.validity;
  const views = product.views;
  const batch = product.batch;
  const hours = product.hours;
  const subjectName = product.subjectName;
  const teacherName = product.teacherName;
  const examName = product.examName;
  const productName = `${examName} ${subjectName} ${batch}`;
  const lecture = product.lecture;

  return (
    <div className={s.card}>
      {isCombo && <Ribbon />}
      <section className={s.sec1}>
        <div className={s.faculty}>
          <Image
            src={`/images/teachers/${teacherName}.jpg`}
            height={85}
            width={85}
            alt="teacher image"
            className={s.facultyImg}
          />
          <h5 className={s.teacherName}>{teacherName}</h5>
        </div>
        <div className={s.product}>
          <h3 className={s.productName}>{productName}</h3>
          <h4 className={s.productCategory}>{`${examName}/ ${batch}`}</h4>
          <h4 className={s.finalCost}>{`₹ ${price}`}</h4>
          <h4 className={s.originalCost}>{`₹ ${
            price + parseInt((10 / 100) * price)
          }`}</h4>
        </div>
      </section>

      <p className={s.off}>10% OFF</p>
      <table>
        <thead>
          <tr>
            <th>Lecture</th>
            <th>Duration</th>
            <th>Views</th>
            <th>Validity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{lecture}</td>
            <td>{`${hours} Hrs`}</td>
            <td>{`${views}X`}</td>
            <td>{`${validity} Months`}</td>
          </tr>
        </tbody>
      </table>
      <section className={s.format}>
        <div>
          <h5>Videos: </h5>
          {format === "USB" ? (
            <FormatIcon icon={<AiFillUsb />} color="#007D9C" title="USB" />
          ) : (
            <FormatIcon
              icon={<FaDownload />}
              color="#007D9C"
              title="Download"
            />
          )}

          <h5>Study Material:</h5>
          {studyMaterial === "Hardbook" ? (
            <FormatIcon icon={<FaBook />} color="#41BC14" title="Hardcopy" />
          ) : (
            <FormatIcon
              icon={<SiBmcsoftware />}
              color="#41BC14"
              title="Softcopy"
            />
          )}
        </div>
      </section>
      <div className={s.actionLinks}>
        <ul>
          <IconBtn icon={<FaEye />} color="#EBA300" link="#" />
          <IconBtn icon={<FaShoppingCart />} color="#34567B" link="#" />
          <IconBtn icon={<FaPhone />} color="#2468AD" link="#" />
          <IconBtn icon={<FaShare />} color="#02A4E8" link="#" />
          <IconBtn icon={<FaWhatsapp />} color="#2AB200" link="#" />
        </ul>
      </div>
    </div>
  );
};

export default Card;
