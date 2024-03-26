interface ErrorProps {
  errormessage: string;
}

const ErrorSpan = ({ errormessage }: ErrorProps) => {
  return <div style={{ fontSize: "9px", color: "red" }}>{errormessage}</div>;
};

export default ErrorSpan;
