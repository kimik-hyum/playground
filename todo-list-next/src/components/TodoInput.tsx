import Input, { HeadlessInputProps } from "@/headless-ui/Input";
import * as React from "react";

type TodoInputProps = Omit<HeadlessInputProps, "ref"> & Props;

type Props = {};

const TodoInput = React.forwardRef<HTMLInputElement, TodoInputProps>(
  ({ ...props }, ref) => {
    return <Input ref={ref} {...props} className="todo-input" />;
  }
);

TodoInput.displayName = "TodoInput";
export default TodoInput;
