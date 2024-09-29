import React from "react";

interface StarProps {
  important: boolean;
  size?: number;
}

const Star: React.FC<StarProps> = ({ important, size = 24 }) => {
  const fill = important ? "#FFD700" : "#D3D3D3";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={fill}
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { Star };