// import InformationSystems from "./InformationSystems";
// import Entities from "../Entities/Entities";
// import EntitysChart from "./Management/EntityChart/EntitysChart";
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
      {/* <EntitysChart/> */}
    </>
  );
}
