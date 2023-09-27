import React from "react";

type InputProps = React.HTMLProps<HTMLInputElement>;

export interface HeadlessInputProps extends InputProps {
  before?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, HeadlessInputProps>(
  ({ before, ...props }, ref) => {
    return (
      <div className="ui-input">
        <input ref={ref} {...props} />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
