import { ReactNode } from "react";

interface InputLabelProps extends React.SelectHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const InputLabel = ({ children, ...props }: InputLabelProps) => {
  return (
    <label {...props} className="font-thin text-zinc-600">
      {children}
    </label>
  );
};

export default InputLabel;
