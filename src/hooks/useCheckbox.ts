import { useState } from "react";

export const useCheckbox = (initialState: boolean) => {
  const [checked, _setChecked] = useState<boolean>(initialState);
  const setCheckedToggle = () => _setChecked((prev) => !prev);
  const setCheckedTrue = () => _setChecked(true);
  const setCheckedFalse = () => _setChecked(false);
  return { checked, setCheckedToggle, setCheckedTrue, setCheckedFalse };
};
