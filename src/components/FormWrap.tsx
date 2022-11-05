import { ReactNode } from "react";

interface IFormWrapProps {
  title: string;
  children: ReactNode;
}

export default function FormWrap({ title, children }: IFormWrapProps) {
  return (
    <>
      <h2 className="m-0 text-center mb-8 text-2xl font-bold">{title}</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 300px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
