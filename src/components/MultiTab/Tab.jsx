const Tab = ({ title, icon, activeTab, handleTabChange, type = 1 }) => {
    switch (type) {
        case 1:
            return (
                <button
                    onClick={() => handleTabChange(title)}
                    className={`${activeTab === title ? 'border-gray-300' : 'border-gray-100'} flex gap-2 items-center border-solid border-b-2 px-4 pb-2 transition-all duration-200 ease-in-out`}
                >
                    <div>{icon}</div>
                    <span>{title}</span>
                </button>
            )
        case 2:
            return (
                <button
                    onClick={() => handleTabChange(title)}
                    className={`${activeTab === title ? 'bg-blue-500 text-white' : ''} flex gap-2 items-center p-3 rounded-3xl transition-all duration-200 ease-in-out`}
                >
                    <div>{icon}</div>
                    <span>{title}</span>
                </button>
            )
        case 3:
            return (
                <button
                    onClick={() => handleTabChange(title)}
                    className={`${activeTab === title ? 'bg-blue-100 text-blue-600' : ''} flex gap-2 items-center p-2 rounded-xl transition-all duration-200 ease-in-out`}
                >
                    <div>{icon}</div>
                    <span>{title}</span>
                </button>
            )
    }
};

export default Tab;