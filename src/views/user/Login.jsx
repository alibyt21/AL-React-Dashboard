import { PiUser } from "react-icons/pi";
import { PiKey } from "react-icons/pi";
import { FcLock } from "react-icons/fc";
import { FcScatterPlot } from "react-icons/fc";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen overflow-hidden login-container p-4">
            <div className="relative bg-[#ffffff83] w-full max-w-[500px] rounded-2xl shadow-al backdrop-blur-[20px] p-6 text-gray-800">
                <div className="flex flex-col gap-6 my-5">
                    <div className="flex justify-center">
                        <img src="/assets/img/logos/iritco.png" className="w-[200px]" />
                    </div>
                    <div className="flex justify-center ">
                        <span className="font-medium text-lg">
                            سامانه مدیریت داده های کلیدی هویتی و کنترل دسترسی
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="bg-[#e7e6f0] rounded-full flex items-center w-full px-3 text-gray-700">
                            <PiUser size={26} />
                            <input type="text" placeholder="نام کاربری" className="w-full rounded-full p-3 bg-inherit outline-none" />
                        </div>
                        <div className="bg-[#e7e6f0] rounded-full flex items-center w-full px-3 text-gray-700">
                            <PiKey size={26} />
                            <input type="text" placeholder="گذرواژه" className="w-full rounded-full p-3 bg-inherit outline-none" />
                        </div>
                        <div className="flex w-full justify-end">
                            <span className="px-4 text-sm">
                                فراموشی رمز عبور؟
                            </span>
                        </div>
                        <div className="bg-primary-color text-white rounded-full flex items-center w-full p-3 mt-3">
                            <button className="flex justify-center text-center w-full ">
                                ورود به حساب کاربری
                            </button>
                        </div>
                        <div className="flex gap-2 w-full justify-center text-sm">
                            <span>
                                حساب کاربری ندارید؟
                            </span>
                            <span className="font-medium text-primary-color">ثبت نام</span>
                            <span>کنید</span>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-[30px] text-white w-full text-center pl-12 text-sm">
                    تمامی حقوق محفوظ است ©
                </div>
                <div className="absolute bg-white p-4 rounded-full right-12 -top-[35px] shadow-al">
                    <FcScatterPlot size={30} />
                </div>
                <div className="absolute bg-white p-4 rounded-full -left-[35px] top-12 shadow-al">
                    <FcLock size={30} />
                </div>
            </div>
        </div>
    )
}
