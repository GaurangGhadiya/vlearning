import * as S from "./Button.styles";

const Button = ({
  className,
  children,
  onClick,
  loading,
  btnStyle,
  stretch,
}) => {
  return (
    <S.Button
      onClick={onClick}
      className={[loading && "loading", className].join(" ")}
      btnStyle={btnStyle}
      stretch={stretch}
    >
      <p>{children}</p>
    </S.Button>
  );
};

Button.defaultProps = {
  loading: false,
  btnStyle: "black",
  stretch: false,
};
export default Button;
