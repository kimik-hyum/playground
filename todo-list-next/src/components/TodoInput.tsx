import Input, { HeadlessInputProps } from "@/headless-ui/Input";
import * as React from "react";

type TodoInputProps = Omit<HeadlessInputProps, "ref"> & Props;

type Props = {
  after?: React.ReactNode;
};

const TodoInput = React.forwardRef<HTMLInputElement, TodoInputProps>(
  ({ after, ...props }, ref) => {
    return <Input ref={ref} {...props} />;
  }
);

TodoInput.displayName = "TodoInput";
export default TodoInput;
