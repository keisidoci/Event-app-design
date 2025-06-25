import React from "react";
import "../components/TextComponent.css";

const TextComponent = ({
  label,
  size,
  weight,
  color,
  lineheight,
  style = {},
  ...props
}) => {
  const extraClass = `family ${size} ${weight} ${color} ${lineheight}`;

  return (
    <div className={extraClass} {...props} style={style}>
      {label}
    </div>
  );
};

export default TextComponent;
