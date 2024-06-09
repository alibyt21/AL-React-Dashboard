import { useState } from 'react';
import Tab from './Tab';
import styles from "./MultiTab.module.css";

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

        <div className={`w-full flex flex-col ${type != 4 ? "gap-4" : ""}`}>
            <div className={`flex justify-${justify}`}>
                <div className={`flex ${type != 4 ? "rounded-2xl p-1" : ""} ${type == 3 ? "border boder-gray-200 border-solid" : ""} ${type == 4 ? styles["nav-tab"] : ""} ${type == 4 ? styles["right"] : ""} ${type != 1 ? "gap-2" : ""}`}>
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
            <div className={`${type == 4 ? styles["main-content"] : ""} w-full`}>
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
