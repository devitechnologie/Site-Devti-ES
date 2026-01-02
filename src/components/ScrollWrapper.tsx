"use client"

import { Element } from "react-scroll";

type ScrollWrapperProps = {
  children: React.ReactNode;
  name: string;
};

const ScrollWrapper = ({ children, name }: ScrollWrapperProps) => {
  return (
    <Element name={name}>
      {children}
    </Element>
  );
};

export default ScrollWrapper;
