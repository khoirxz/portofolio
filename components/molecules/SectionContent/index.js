import React from "react";

const SectionContent = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default SectionContent;
