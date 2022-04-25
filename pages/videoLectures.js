import Card from "../components/Card/Card";
import { useQuery, gql } from "@apollo/client";
import s from "../styles/videoLectures.module.scss";
import { FaAngleDown } from "react-icons/fa";

const VideoLectures = () => {
  const { data, loading, error } = useQuery(QUERY);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return null;
  }

  const products = data.products.data;
  const productsData = products.map((product) => {
    const {
      id,
      attributes: {
        format,
        isCombo,
        price,
        studyMaterial,
        validity,
        view,
        videoLecture: {
          data: {
            attributes: {
              batch,
              startDate,
              endDate,
              hours,
              subject: {
                data: {
                  attributes: {
                    subjectName,
                    exam: {
                      data: {
                        attributes: { examName },
                      },
                    },
                  },
                },
              },
              teacher: {
                data: {
                  attributes: {
                    teacherName,
                    teacherImage: {
                      data: {
                        attributes: { url },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    } = product;
    return {
      id,
      format,
      isCombo,
      price,
      studyMaterial,
      validity,
      view,
      batch,
      startDate,
      endDate,
      hours,
      subjectName,
      examName,
      teacherName,
      url,
    };
  });
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.categorySection}>
          <h3>Filter By:</h3>
          <ul className={s.categories}>
            <li>
              <h4>Faculty</h4>
              <ul className={s.categoryList}>
                {productsData.map((product, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      value={product.teacherName}
                      id="teacherName"
                    />{" "}
                    <label htmlFor="teacherName">{product.teacherName}</label>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <h4>Subject</h4>
              <ul className={s.categoryList}>
                {productsData.map((product, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      value={product.subjectName}
                      id="subjectName"
                    />{" "}
                    <label htmlFor="subjectName">{product.subjectName}</label>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <h4>Type</h4>
              <ul className={s.categoryList}>
                <li>
                  <input type="checkbox" value="regular" />{" "}
                  <label htmlFor="regular">Regular</label>
                </li>
                <li>
                  <input type="checkbox" value="FastTrack" />{" "}
                  <label htmlFor="FastTrack">Fask Track</label>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={s.sortSection}>
          <div className={s.sortBy}>
            <h5>Sort By</h5>
            <FaAngleDown />
            <ul className={s.sortOptions}>
              <li className={s.active}>
                <a href="">Relevence</a>
              </li>
              <li>
                <a href="">Popularity</a>
              </li>
              <li>
                <a href="">Newest First</a>
              </li>
              <li>
                <a href="">Price: Low to High</a>
              </li>
              <li>
                <a href="">Price: High to Low</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.cardSection}>
          {productsData.map((product, index) => (
            <Card product={product} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoLectures;

const QUERY = gql`
  query {
    products(filters: { isCombo: { eq: false } }) {
      meta {
        pagination {
          page
          total
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          isCombo
          videoLecture {
            data {
              id
              attributes {
                subject {
                  data {
                    id
                    attributes {
                      subjectName
                      exam {
                        data {
                          id
                          attributes {
                            examName
                          }
                        }
                      }
                    }
                  }
                }
                teacher {
                  ...TeacherNameImage
                }
                batch
                hours
                startDate
                endDate
              }
            }
          }
          combo {
            data {
              id
              attributes {
                comboName
                videoLecture {
                  data {
                    id
                    attributes {
                      subject {
                        data {
                          id
                          attributes {
                            subjectName
                            exam {
                              data {
                                id
                                attributes {
                                  examName
                                }
                              }
                            }
                          }
                        }
                      }
                      teacher {
                        ...TeacherNameImage
                      }
                    }
                  }
                }
              }
            }
          }
          view
          validity
          format
          studyMaterial
          price
        }
      }
    }
  }

  fragment TeacherNameImage on TeacherEntityResponse {
    data {
      id
      attributes {
        teacherName
        teacherImage {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
      }
    }
  }
`;
