import { useState } from 'react';

export default function MultiTab({ children }) {

    // set first tab active by default
    const [activeTab, setActiveTab] = useState(children[0].props.title);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (

        <div className='flex flex-col gap-3'>
            <div className='flex'>
                {
                    children.map(
                        (child) => {
                            return (
                                <button
                                    onClick={() => handleTabChange(child.props.title)}
                                    className={`${activeTab === child.props.title ? 'border-gray-300' : 'border-gray-100'} border-solid border-b-2 px-2`}
                                >
                                    {
                                        child.props.title
                                    }
                                </button>
                            )
                        }
                    )
                }
            </div>
            <div>
                {
                    children.map(
                        (child) => {
                            if (activeTab === child.props.title) {
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
        </div>
    )
}
