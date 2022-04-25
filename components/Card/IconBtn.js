const IconBtn = ({ icon, color, link }) => {
  return (
    <li className="iconBtn">
      <a href={link}>{icon}</a>

      <style jsx>
        {`
          .iconBtn {
            margin: 4px;
          }
          a {
            border-radius: 4px;
            color: ${color};
            display: flex;
            width: 30px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border: 1px solid ${color};
          }
          a:hover,
          a:hover * {
            background-color: ${color};
            color: white;
          }
        `}
      </style>
    </li>
  );
};

export default IconBtn;
