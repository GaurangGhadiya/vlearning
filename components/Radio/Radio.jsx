const Radio = ({
  className,
  value,
  valueExtension,
  name,
  option,
  setOption,
  disabled,
}) => {
  return (
    <div className={className}>
      <input
        type="radio"
        id={`${value}${valueExtension}`}
        value={value}
        name={name}
        checked={value == option}
        onChange={(e) => setOption(e)}
        disabled={disabled}
      />
      <label
        htmlFor={`${value}${valueExtension}`}
      >{`${value} ${valueExtension}`}</label>
    </div>
  );
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
