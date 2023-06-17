export const themeStyles: Function = (mode: string) => {
  if (mode === "light") {
    return {
      mode: mode,
      font: "text-black",
      font1: "text-darkGray",
      background: "bg-moderateGray",
      background1: "bg-secondary",
      background2: "bg-white",
      background3: "bg-darkGray",
    };
  } else {
    return {
      mode: mode,
      font: "text-white",
      font1: "dark-Gray",
      background: "bg-black",
      background1: "bg-primary",
      background2: "bg-lightBlack",
      background3: "bg-lightGray",
    };
  }
};
