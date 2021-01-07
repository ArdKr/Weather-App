import React from "react";

const Button = ({
  children,
  fullHeight = false,
  color = "blue-light",
  border = false,
  onClick,
  rounded = false,
  paddingEqual = false,
}) => {
  const styleClasses = () => {
    let classes = `bg-${color} text-white text-normal cursor-pointer text-medium`;

    if (border) {
      classes += " border";
    }

    if (fullHeight) {
      classes += " h-full";
    }

    if (rounded) {
      classes += " rounded-full";
    }

    if (paddingEqual) {
      classes += " h-20 w-20";
    } else {
      classes += " py-4 px-8";
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
