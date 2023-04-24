import { InputHTMLAttributes, Ref } from "react";
import { ModelInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  innerRef?: Ref<any>;
}

const Input = ({ label, required, innerRef, ...rest }: InputProps) => {
  const lab = required ? label + "*" : label;
  return (
    <ModelInput>
      {lab}
      <input ref={innerRef} {...rest} />
    </ModelInput>
  );
};

export default Input;
