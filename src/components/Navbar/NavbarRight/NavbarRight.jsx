import AvatarButton from "./AvatarButton";
import NotificationButton from "./NotificationButton";
import OptionsButton from "./OptionsButton";
import SearchButton from "./SearchButton";
import ServicesButton from "./ServicesButton";

export default function NavbarRight() {
  return (
    <div className="relative flex items-center gap-3">
      <SearchButton />
      <div className="items-center hidden gap-3 md:flex">
        <NotificationButton />
        <ServicesButton />
        <OptionsButton />
      </div>
      <AvatarButton />
    </div>
  );
}
