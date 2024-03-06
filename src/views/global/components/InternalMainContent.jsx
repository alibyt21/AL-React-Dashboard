// import InformationSystems from "./InformationSystems";
// import Entities from "../Entities/Entities";
import InformationSystemsM from "./Management/InformationSystemsM";
import WebsiteManagement from "./Management/SiteManagement/WebsiteManagement";
import QuickAccess from "./Management/QuickAccess/QuickAccess";
export default function InternalMainContent() {
  return (
    <>
      {/* <InformationSystems /> */}
      {/* <Entities /> */}
      <InformationSystemsM />
      <WebsiteManagement />
      <QuickAccess />
    </>
  );
}
