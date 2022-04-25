const Ribbon = () => {
  return (
    <span className="ribbon">
      <style jsx>
        {`
          .ribbon {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 70px;
            height: 70px;
            /* background-color: pink; */
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .ribbon::before {
            content: "COMBO";
            position: absolute;
            width: 150%;
            height: 20px;
            background-color: #6270ea;
            transform: rotate(45deg) translateY(-10px);
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-shadow: 1px 1px 2px gray;
          }
        `}
      </style>
    </span>
  );
};

export default Ribbon;
