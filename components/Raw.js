import React from "react";

const Raw = ({ children }) => {
  let display = children;
  if (typeof children === object) {
  }
  return (
    <div>
      <blockquote>
        <pre>
          <code>{children}</code>
        </pre>
      </blockquote>
    </div>
  );
};

export default Raw;
