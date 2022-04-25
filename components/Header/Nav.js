import s from "../../styles/Nav.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/teachers`),
        fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/subjects`),
      ]);
      const [teachersData, subjectsData] = await Promise.all(
        res.map((e) => e.json())
      );
  
      const teachers = teachersData.data.map((teacherData) => {
        const {
          attributes: { teacherName },
        } = teacherData;
        return teacherName;
      });
      setTeachers(teachers);
      const subjects = subjectsData.data.map((subjectData) => {
        const {
          attributes: { subjectName },
        } = subjectData;
        return subjectName;
      });
      setSubjects(subjects);
    }
    fetchData();

  }, []);

  return (
    <nav className={s.nav}>
      <ul className={s.navLevel1}>
        <li>
          <Link href="/videoLectures">
            <a>Video Lectures</a>
          </Link>

          <ul className={s.navLevel2} id={s.navLevel2}>
            <li>
              <a href="#">CA</a>
              <ul className={s.navLevel3} id={s.navLevel3}>
                <h3>CA</h3>
                <li>
                  <a href="#">CA Foundation</a>
                </li>
                <li>
                  <a href="#">CA Intermediate</a>
                </li>
                <li>
                  <a href="#">CA Final</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CS</a>
              <ul className={s.navLevel3}>
                <h3>CS</h3>
                <li>
                  <a href="#">CSEET</a>
                </li>
                <li>
                  <a href="#">CS Executive</a>
                </li>
                <li>
                  <a href="#">CS Professional</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CMA</a>
              <ul className={s.navLevel3}>
                <h3>CMA</h3>
                <li>
                  <a href="#">CMA Foundation</a>
                </li>
                <li>
                  <a href="#">CMA Inter</a>
                </li>
                <li>
                  <a href="#">CMA Final</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CFA</a>
              <ul className={s.navLevel3}>
                <h3>CFA</h3>
                <li>
                  <a href="#">CFA</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">ACCA</a>
              <ul className={s.navLevel3}>
                <h3>ACCA</h3>
                <li>
                  <a href="#">IFRS</a>
                </li>
                <li>
                  <a href="#">Knowledge Level</a>
                </li>
                <li>
                  <a href="#">Skill Level</a>
                </li>
                <li>
                  <a href="#">Professional Level</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Other Courses</a>
              <ul className={s.navLevel3}>
                <h3>Other Courses</h3>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Books</a>
          <ul className={s.navLevel2}>
            <li>
              <a href="#">CA</a>
              <ul className={s.navLevel3}>
                <h3>CA</h3>
                <li>
                  <a href="#">CA Foundation</a>
                </li>
                <li>
                  <a href="#">CA Intermediate</a>
                </li>
                <li>
                  <a href="#">CA Final</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CS</a>
              <ul className={s.navLevel3}>
                <h3>CS</h3>
                <li>
                  <a href="#">CSEET</a>
                </li>
                <li>
                  <a href="#">CS Executive</a>
                </li>
                <li>
                  <a href="#">CS Professional</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">CMA</a>
              <ul className={s.navLevel3}>
                <h3>CMA</h3>
                <li>
                  <a href="#">CMA Foundation</a>
                </li>
                <li>
                  <a href="#">CMA Inter</a>
                </li>
                <li>
                  <a href="#">CMA Final</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Professional</a>
              <ul className={s.navLevel3}>
                <h3>Professional</h3>
              </ul>
            </li>
          </ul>
        </li>
        <li className={s.faculty}>
          <a href="#">Faculty</a>
          <ul className={s.oNavLevel2}>
            {teachers.map((teacher, index) => (
              <li key={index}>
                <a href="#">{teacher}</a>
              </li>
            ))}
          </ul>
        </li>
        <li className={s.subject}>
          <a href="#">Subjects</a>
          <ul className={s.oNavLevel2}>
            {subjects.map((subject, index) => (
              <li key={index}>
                <a href="#">{subject}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="#">Test Series</a>
          <ul className={s.navLevel2}>
            <li>
              <a href="#">CA Foundation</a>
            </li>
            <li>
              <a href="#">CA Intermediate</a>
            </li>
            <li>
              <a href="#">CA Final</a>
            </li>
            <li>
              <a href="#">CSEET</a>
            </li>
            <li>
              <a href="#">CMA Foundation</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Free Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
