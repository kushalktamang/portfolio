import { ReactNode } from "react";

interface IShell {
  children?: ReactNode;
  className?: string;
}

const Shell = ({ children, className = "" }: IShell) => {
  return (
    <div
      className={`relative mx-auto w-full max-w-190 border-x border-dashed border-line ${className}`}
    >
      {children}
    </div>
  );
};

export default Shell;
