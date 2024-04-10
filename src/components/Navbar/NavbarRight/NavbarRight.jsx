import AvatarButton from "./AvatarButton";
import DarkModeSwap from "./DarkModeSwap";
import NotificationButton from "./NotificationButton";
import OptionsButton from "./OptionsButton";
import SearchButton from "./SearchButton";
import ServicesButton from "./ServicesButton";

export default function NavbarRight() {
  return (
    <div className="relative flex items-center gap-2">
      <DarkModeSwap />
      <div className="items-center hidden gap-2 md:flex">
        <SearchButton />
        <NotificationButton />
        <ServicesButton />
        <OptionsButton />
      </div>
      <AvatarButton />
    </div>
  );
}
