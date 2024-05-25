import { AiOutlineInfoCircle } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";
import { GoXCircleFill } from "react-icons/go";
import { GoCheckCircleFill } from "react-icons/go";

export default function Hintbox({ text, type = "alert" }) {
  switch (type) {
    case "info":
      return (
        <div className="flex items-center gap-2 border-2 border-dashed border-blue-300 bg-blue-50 dark:bg-gray-800 rounded-xl p-4">
          <AiOutlineInfoCircle className="text-blue-300" size={18} />
          <span className="text-blue-800 dark:text-blue-100">{text}</span>
        </div>
      );
    case "alert":
      return (
        <div className="flex items-center gap-2 border-2 border-dashed border-orange-300 bg-orange-50 rounded-xl p-4">
          <GoAlertFill className="text-orange-300" size={18} />
          <span className="text-orange-800 dark:text-orange-100">{text}</span>
        </div>
      );
    case "success":
      return (
        <div className="flex items-center gap-2 border-2 border-dashed border-green-400 bg-green-50 rounded-xl p-4">
          <GoCheckCircleFill className="text-green-400" size={18} />
          <span className="text-green-800 dark:text-green-100">{text}</span>
        </div>
      );
    case "error":
      return (
        <div className="flex items-center gap-2 border-2 border-dashed border-red-400 bg-red-50 rounded-xl p-4">
          <GoXCircleFill className="text-red-400" size={18} />
          <span className="text-red-800 dark:text-red-100">{text}</span>
        </div>
      );
    default:
      break;
  }
}
