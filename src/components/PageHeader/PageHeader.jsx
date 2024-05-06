import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "src/routes/Breadcrumb";

export default function PageHeader({ title, description = false, btnTitle, handleClick }) {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between pb-4 border-b border-solid border-gray-200 mb-4'>
            <div className='flex items-center gap-2'>
                <span onClick={() => navigate(-1)}>
                    <FaArrowRight className="cursor-pointer" size={15} />
                </span>
                <div className='flex-1 w-full flex flex-col gap-2'>
                    <span className='font-light text-2xl'>{title}</span>
                    {
                        description
                        &&
                        <p className='text-sm font-light'>{description}</p>
                    }
                </div>
                <div className="px-6">
                    <nav className="pt-0 flex d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <Breadcrumb />
                    </nav>
                </div>
            </div>
            <div>
                {
                    btnTitle
                    &&
                    <button
                        className='flex-1 w-full flex justify-end p-6 py-3 rounded-xl text-white bg-blue-500'
                        onClick={handleClick}
                    >
                        {btnTitle}
                    </button>
                }
            </div>
        </div>
    )
}
