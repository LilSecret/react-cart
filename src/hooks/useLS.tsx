import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key);

    return storedState ? JSON.parse(storedState) : initialValue;
  });

  return {
    state,
    setState,
  };
};
