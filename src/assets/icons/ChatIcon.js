import React from "react";

const ChatIcon = ({ width = 20, height = 20, fill = "#FFFFFF", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChatIcon;
