import Footer from "./Footer";
import MainContent from "./MainContent";
import Navbar from "./Navbar";

export default function Main({ children }) {
  return (
    <div className="flex flex-col flex-1 h-full overflow-hidden dark:bg-black text-gray-700 dark:text-white">
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
}
