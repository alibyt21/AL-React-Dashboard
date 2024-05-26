import { useState } from "react";
import SettingPanelButton from "./SettingPanelButton";
import SettingPanelContent from "./SettingPanelContent";

export default function SettingPanel() {
  const [active, setActive] = useState(false);

  return (
    <>
      <SettingPanelButton handleState={setActive} />
      <SettingPanelContent state={active} handleState={setActive} />
    </>
  );
}
