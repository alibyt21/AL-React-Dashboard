import { defaultHeaderHeight } from "src/settings/config";
import DesktopSearchBox from "./DesktopSearchBox";
import MobileSearchBox from "./MobileSearchBox";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

export default function Navbar() {
  return (
    <header
      className="flex items-center justify-between p-2"
      style={{ height: `${defaultHeaderHeight}px` }}
    >
      <NavbarLeft />
      {/* <MobileSearchBox /> */}
      {/* <DesktopSearchBox /> */}
      <NavbarRight />
    </header>
  );
}
