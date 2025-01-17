import { ReactNode } from "react";

const CentralizeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default CentralizeContainer;
