import { Link } from "react-router-dom";

export default function Denied() {

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="flex gap-5 items-center">
                <div className="font-bold text-9xl text-red-500">403</div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <svg aria-hidden="true" className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span className="text-xl font-medium text-gray-700">
                            عدم دسترسی به صفحه
                        </span>
                    </div>
                    <div className="text-gray-600 font-light">
                        دسترسی به این صفحه برای شما مجاز نیست
                    </div>
                    <div className="text-gray-600 font-light">
                        میتوانید به
                        <Link to="/">
                            <span className="text-blue-500">
                                ‌ صفحه اصلی ‌
                            </span>
                        </Link>
                        برگردید یا مجددا تلاش کنید.
                    </div>
                </div>
            </div>
        </div>
    )
}
