import { defaultDirection } from "src/settings/config";
import AvatarButton from "./AvatarButton";
import DarkModeSwap from "./DarkModeSwap";
import NotificationButton from "./NotificationButton";
import OptionsButton from "./OptionsButton";
import SearchButton from "./SearchButton";
import ServicesButton from "./ServicesButton";
import { useContext } from "react";
import dashboardContext from "src/context/dashboardContext";

export default function NavbarRight() {
  const { direction } = useContext(dashboardContext)

  return (
    <div className="relative flex items-center gap-2">
      <DarkModeSwap />
      <div className="items-center hidden gap-2 md:flex">
        <SearchButton />
        <NotificationButton direction={direction} />
        <ServicesButton direction={direction} />
        <OptionsButton direction={direction} />
      </div>
      <AvatarButton direction={direction} />
    </div>
  );
}
