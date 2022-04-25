import React from "react";

const FormatIcon = ({ icon, title, color }) => {
  return (
    <div className="formatIcon">
      <div>{icon}</div>
      <span>{title}</span>

      <style jsx>{`
        .formatIcon {
          display: flex;
          color: #0b2b4f;
        }
        .formatIcon > div {
          height: 28px;
          display: flex;
          align-items: center;
          padding: 0px 2px;
          border: 1px solid #0b2b4f;
          border-right: none;
          border-radius: 8px 0px 0px 8px;
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
            0 2px 10px 0 rgb(0 0 0 / 12%);
        }
        .formatIcon > span {
          display: flex;
          align-items: center;
          font-size: 12px;
          background-color: ${color};
          height: 28px;
          padding: 0px 10px;
          border-radius: 0px 8px 8px 0px;
          color: white;
          box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
            0 2px 10px 0 rgb(0 0 0 / 12%);
          text-shadow: 1px 1px 2px black;
          /* border: 1px solid black */
        }
      `}</style>
    </div>
  );
};

export default FormatIcon;
