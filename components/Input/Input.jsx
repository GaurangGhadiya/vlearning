import * as S from "components/Input/_Input.styles"
import camelCase from "../../utils/camelCase";

const Input = ({ name, value, setValue }) => {
  return (
    <S.Input>
      <input
        type="text"
        id={camelCase(name)}
        placeholder={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={camelCase(name)}>{name}</label>
    </S.Input>
  );
};

export default Input;
