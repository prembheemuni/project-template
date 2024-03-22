import ErrorSpan from "../Error/ErrorSpan";

interface InputProps {
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
  errormessage: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input
        {...props}
        style={{ padding: "10px", marginRight: "10px", marginBottom: "10px" }}
      />
      {props.errormessage && <ErrorSpan errormessage={props.errormessage} />}
    </div>
  );
};

export default Input;
