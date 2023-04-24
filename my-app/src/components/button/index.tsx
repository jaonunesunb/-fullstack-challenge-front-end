import { ModelButton } from "./style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return <ModelButton {...rest}>{text}</ModelButton>;
};

export default Button;
