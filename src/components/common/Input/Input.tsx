import ErrorSpan from "../Error/ErrorSpan";

interface InputProps {
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
  errorMessage: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input
        {...props}
        style={{ padding: "10px", marginRight: "10px", marginBottom: "10px" }}
      />
      {props.errorMessage && <ErrorSpan errorMessage={props.errorMessage} />}
    </div>
  );
};

export default Input;
