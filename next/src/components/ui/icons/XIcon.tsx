import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

export default function XIcon({
  size = 20,
  color = "currentColor",
  ...props
}: IconProps) {
  const computedSize = Number(size) || 20;

  return (
    <svg
      width={computedSize}
      height={computedSize}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
