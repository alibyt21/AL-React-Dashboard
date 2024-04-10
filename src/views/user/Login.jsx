import { PiUser } from "react-icons/pi";
import { PiKey } from "react-icons/pi";
import { FcLock } from "react-icons/fc";
import { FcScatterPlot } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { get, post } from "src/services/HttpClient";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            // validate={values => {
            //     const errors = {};
            //     if (!values.email) {
            //         errors.email = 'Required';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     return errors;
            // }}
            onSubmit={async (values, { setSubmitting }) => {
                const result = await post("/login", {
                    email: values.email,
                    password: values.password
                });
                if (result) {
                    localStorage.setItem("access_token", result.body.token);
                    axios.defaults.headers.common['Authorization'] = result.body.token
                    navigate("/");
                }
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <div className="flex justify-center items-center h-screen overflow-hidden login-container p-4">
                        <div className="relative bg-[#ffffff83] w-full max-w-[500px] rounded-2xl shadow-al backdrop-blur-[15px] p-6 text-gray-800">
                            <div className="flex flex-col gap-6 my-5">
                                <div className="flex justify-center">
                                    <img src="/logo512.png" className="w-14" />
                                </div>
                                <div className="flex justify-center ">
                                    <span className="font-medium text-lg">
                                        سامانه تحلیل مشاغل
                                    </span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="gap-2 rounded-full flex items-center w-full px-3 text-gray-700">
                                        <PiUser size={26} className="text-black" />
                                        <Field
                                            type="email"
                                            placeholder="ایمیل"
                                            className="bg-[#eff4ffa5] w-full rounded-full p-3 outline-none"
                                            name="email"
                                        />
                                    </div>
                                    <div className="gap-2 rounded-full flex items-center w-full px-3 text-gray-700">
                                        <PiKey size={26} className="text-black" />
                                        <Field
                                            type="password"
                                            placeholder="گذرواژه"
                                            className="bg-[#eff4ffa5] w-full rounded-full p-3 outline-none"
                                            name="password"
                                        />
                                    </div>
                                    <div className="flex w-full justify-end">
                                        <button className="px-4 text-sm">
                                            فراموشی رمز عبور؟
                                        </button>
                                    </div>
                                    <button type="submit" className="flex justify-center text-center w-full ">
                                        <div className="bg-primary-color flex justify-center text-white rounded-full items-center w-full p-3 mt-3">
                                            ورود به حساب کاربری
                                        </div>
                                    </button>
                                    <div className="flex gap-2 w-full justify-center text-sm">
                                        <button>
                                            حساب کاربری ندارید؟
                                        </button>
                                        <span className="font-medium text-white">ثبت نام</span>
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
                </Form>
            )}
        </Formik>
    )
}
