import { render } from "@testing-library/react";
import Button from "./Button";

describe("Testing Button", () => {
  const props = {
    showText: "Click me",
    clickFunc: () => jest.fn(),
  };
  it("Testing button", () => {
    render(<Button {...props} />);
  });
});
