import React from "react";

const Button = ({
  children,
  fullHeight = false,
  color = "blue-light",
  border = false,
  onClick,
  rounded = false,
}) => {
  const styleClasses = () => {
    let classes = `bg-${color} py-4 px-8 text-white text-normal cursor-pointer`;

    if (border) {
      classes += " border";
    }

    if (fullHeight) {
      classes += " h-full";
    }

    if (rounded) {
      classes += " rounded-full";
    }

    return classes;
  };
  return (
    <React.Fragment>
      <button className={styleClasses()} onClick={onClick}>
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
