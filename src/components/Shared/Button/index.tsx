import { ReactNode } from "react";

interface ButtonProps extends React.SelectHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`bg-orange-500 cursor-pointer text-white rounded-md p-2 disabled:bg-orange-300 disabled:cursor-not-allowed ${props.className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
