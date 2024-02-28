import MainContentHeader from "./MainContentHeader";
import InternalMainContent from "../InformationSystem/InternalMainContent";

export default function MainContent({ children }) {
  return (
    <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll text-justify bg-[#f5f8fa] dark:bg-[#333333] rounded-ss-3xl">
      {/* <!-- Main content header --> */}

      {/* <MainContentHeader /> */}
      <InternalMainContent />

      <div>{children}</div>
    </main>
  );
}
