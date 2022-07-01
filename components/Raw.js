import React from "react";

const Raw = ({ children }) => {
  //   let display = children;
  //   if (typeof children === "object") {
  //     display = JSON.stringify(children, null, 2);
  //   }
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
