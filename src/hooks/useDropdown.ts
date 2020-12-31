import React, { useState } from "react";

export const useDropdown = () => {
  const [value, _setValue] = useState<string>("");
  const [open, _setOpen] = useState<boolean>(false);
  const setValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    if (!target.classList.contains("dropdown__option")) {
      _setValue(target.innerText);
      _setOpen(false);
    }
  };
  const setOpen = () => {
    _setOpen((prev) => !prev);
  };
  return { value, setValue, open, setOpen };
};
