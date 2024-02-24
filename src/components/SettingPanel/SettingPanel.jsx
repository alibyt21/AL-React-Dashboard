import { useState, useEffect } from "react";
import SettingPanelButton from "./SettingPanelButton";
import SettingPanelContent from "./SettingPanelContent";
import { defaultDirection } from "src/settings/config";

export default function SettingPanel() {
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useState(localStorage.getItem("dir") ? localStorage.getItem("dir") : defaultDirection);
  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    localStorage.setItem("dir", direction);
  }, [direction])
  return (
    <>
      <SettingPanelButton handleState={setActive} direction={direction} />
      <SettingPanelContent state={active} handleState={setActive} direction={direction} setDirection={setDirection} />
    </>
  );
}
