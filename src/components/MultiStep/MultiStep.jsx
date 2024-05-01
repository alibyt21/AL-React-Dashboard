import { useEffect, useState } from 'react'
import Step from './Step';

export default function MultiStep({ children, activeStep = 0 }) {
    const [activeTab, setActiveTab] = useState(activeStep);

    useEffect(() => {
        setActiveTab(activeStep)
    }, [activeStep])

    return (
        <>
            <div className='w-full px-10'>
                <div className="flex border-b-2 border-solid border-gray-100 mt-2 -mb-3"></div>
                <div className="flex justify-between">
                    {
                        Array.isArray(children) && children.map(
                            (child, index) => {
                                return (
                                    <div
                                        className="relative flex flex-col items-center cursor-pointer"
                                        onClick={() => { setActiveTab(index) }}
                                    >
                                        <div className={`transition-all duration-200 ease-in-out flex justify-center items-center rounded-full border-2 border-solid w-6 h-6 ${activeTab == index ? "bg-blue-300 border-blue-300" : "bg-gray-50 border-gray-100"}`}>
                                            <div className={`transition-all duration-200 ease-in-out w-2 h-2 rounded-full ${activeTab == index ? "bg-white" : "bg-gray-200"}`}></div>
                                        </div>
                                        <Step title={child.props.title} subTitle={child.props.subTitle} />
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <div className='flex pt-14'>
                {
                    Array.isArray(children) && children.map(
                        (child, index) => {
                            if (activeTab === index) {
                                return (
                                    <div>
                                        {child.props.children}
                                    </div>
                                )
                            }
                        }
                    )
                }
            </div>
        </>
    )
}
