import { useState } from 'react';
import Tab from './Tab';

export default function MultiTab({ children, type = 1, justify = "start" }) {
    // children always should be an array
    if (!Array.isArray(children)) {
        children = [children]
    }

    children = children.filter(function (single) {
        return single;
    })

    // set first tab active by default
    const [activeTab, setActiveTab] = useState(children[0]?.props?.title);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (

        <div className='w-full flex flex-col gap-4'>
            <div className={`flex justify-${justify}`}>
                <div className={`${type == 3 ? "border boder-gray-200 border-solid" : ""} flex ${type != 1 ? "gap-2" : ""} rounded-2xl p-1`}>
                    {
                        children.map(
                            (child) => {
                                return (
                                    <Tab icon={child?.props?.icon} title={child?.props?.title} handleTabChange={handleTabChange} activeTab={activeTab} type={type} />
                                )
                            }
                        )
                    }
                </div>

            </div>
            <div className='w-full'>
                {
                    children.map(
                        (child) => {
                            if (activeTab === child?.props?.title) {
                                return (
                                    <div className='w-full'>
                                        {child?.props.children}
                                    </div>
                                )
                            }
                        }
                    )
                }
            </div>
        </div>
    )
}
