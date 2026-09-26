import React from "react";
import { ToTopBtn } from "../../components/ToTopButton";
import { CloseProjectBtn } from "./[id]/components/CloseProjectBtn";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-22 pb-6 relative flex flex-col items-center">
      <CloseProjectBtn />
      {children}
      <ToTopBtn color="black" />
    </div>
  );
}
