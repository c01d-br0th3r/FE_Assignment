import React, { useState } from "react";

export const useDropdown = (data: any[]) => {
  const [value, _setValue] = useState<any>("");
  const [open, _setOpen] = useState<boolean>(false);
  const setValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    const _target = e.target as HTMLElement;
    const id = _target.id;
    const target = data.filter((d) => `${d.id}` === id);
    if (target.length !== 1) return;
    _setValue(target[0]);
    _setOpen(false);
  };
  const setOpen = () => {
    _setOpen((prev) => !prev);
  };
  return { value, setValue, open, setOpen };
};
