import { useState } from 'react';

export default function MultiTab({ children, type = 1 }) {
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

        <div className='flex flex-col gap-3'>
            <div className={`flex ${type != 1 && "gap-2"}`}>
                {
                    children.map(
                        (child) => {
                            if (type == 1) {
                                return (
                                    <button
                                        onClick={() => handleTabChange(child?.props?.title)}
                                        className={`${activeTab === child?.props?.title ? 'border-gray-300' : 'border-gray-100'} border-solid border-b-2 px-2 pb-2`}
                                    >
                                        {
                                            child?.props?.title
                                        }
                                    </button>
                                )
                            } else {
                                return (
                                    <button
                                        onClick={() => handleTabChange(child?.props?.title)}
                                        className={`${activeTab === child?.props?.title ? 'border-gray-300' : 'border-white'} border-solid border p-2 rounded-3xl`}
                                    >
                                        {
                                            child?.props?.title
                                        }
                                    </button>
                                )
                            }
                        }
                    )
                }
            </div>
            <div>
                {
                    children.map(
                        (child) => {
                            if (activeTab === child?.props?.title) {
                                return (
                                    <div>
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
