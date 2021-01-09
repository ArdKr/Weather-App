import React from "react";

// The button below is screwed (I was running into some PurgeCSS problems). I need to refactor it later when I have time.

const Button = ({
  children,
  fullHeight = false,
  color = "blue-light",
  border = false,
  onClick,
  rounded = false,
  paddingEqual = false,
}) => {
  // const styleClasses = () => {
  //   let classes = `bg-${color} text-white text-normal cursor-pointer text-medium focus:outline-none`;

  //   if (border) {
  //     classes += " border";
  //   }

  //   if (fullHeight) {
  //     classes += " h-full";
  //   }

  //   if (rounded) {
  //     classes += " rounded-full";
  //   }

  //   if (paddingEqual) {
  //     classes += " h-20 w-20";
  //   } else {
  //     classes += " py-4 px-8";
  //   }

  //   return classes;
  // };

  const classes = {
    border: " border",
    fullHeight: " h-full",
    rounded: " rounded-full",
    paddingEqual: " h-20 w-20",
    paddingNotEqueal: " py-4 px-8",
  };

  return (
    <React.Fragment>
      {/* <button className={styleClasses()} onClick={onClick}> */}
      <button
        className={`bg-${color} text-white text-normal cursor-pointer text-medium focus:outline-none${
          border ? classes.border : ""
        }${fullHeight ? classes.fullHeight : ""}${
          rounded ? classes.rounded : ""
        }${paddingEqual ? classes.paddingEqual : classes.paddingNotEqueal}`}
        onClick={onClick}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default Button;
