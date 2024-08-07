import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "src/routes/Breadcrumb";
import { LiaPlusSolid } from "react-icons/lia";
import { HiViewGridAdd } from "react-icons/hi";

export default function PageHeader({
    title,
    description = false,
    btnTitle,
    handleClick,
}) {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between pb-4 border-b border-solid border-gray-200 mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="flex gap-2 items-center">
                    <span
                        className="cursor-pointer bg-white p-2 rounded-lg shadow-lg hover:scale-110 transition-all ease-in-out duration-300"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowRight size={15} />
                    </span>
                    <div className="flex-1 w-full flex flex-col gap-2">
                        <span className="font-light text-lg md:text-xl lg:text-2xl">
                            {title}
                        </span>
                        {description && <p className="text-sm font-light">{description}</p>}
                    </div>
                </div>
                <div className="md:px-6">
                    <nav
                        className="pt-0 flex d-none d-sm-block d-lg-inline-block"
                        aria-label="breadcrumb"
                    >
                        <Breadcrumb />
                    </nav>
                </div>
            </div>
            <div>
                {btnTitle && (
                    <button
                        className="shadow-lg text-sm md:text-base flex-1 w-full flex justify-end p-3 py-2 md:p-6 md:py-3 rounded-lg text-white bg-primary-color opacity-90 hover:opacity-100 transition-all ease-in-out duration-200"
                        onClick={handleClick}
                    >
                        <HiViewGridAdd className="ml-1" size="22" />
                        {btnTitle}
                    </button>
                )}
            </div>
        </div>
    );
}
