import React from "react";

function useMenuToggle(initialValue = false) {
  if (typeof initialValue !== "boolean") {
    console.warn("Invalid type for useToggle");
  }

  const [value, setValue] = React.useState(initialValue);

  const toggleValue = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return [value, toggleValue];
}

export default useMenuToggle;
