import { ReactNode } from "react";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const SelectInput = ({ children, ...props }: SelectInputProps) => {
  return (
    <select
      {...props}
      className="rounded-md p-2 shadow-md outline-none cursor-pointer"
    >
      {children}
    </select>
  );
};

export default SelectInput;
