import React from "react";

type InputProps = React.HTMLProps<HTMLInputElement>;

export interface HeadlessInputProps extends InputProps {}

const Input = React.forwardRef<HTMLInputElement, HeadlessInputProps>(
  ({ ...props }, ref) => {
    return (
      <div className={`ui-input ${props.className}`}>
        <input ref={ref} {...props} />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
