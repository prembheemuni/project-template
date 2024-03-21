interface ErrorProps {
  errorMessage: string;
}

const ErrorSpan = ({ errorMessage }: ErrorProps) => {
  return <div style={{ fontSize: "9px", color: "red" }}>{errorMessage}</div>;
};

export default ErrorSpan;
