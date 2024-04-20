import CompleteSentece from "./CompleteSentece";



export default function FilterContainer({ ifData, dispatch, selectedNodes, setSelectedNodes }) {



    return (
        <>
            <div className="w-full p-6 pb-28">
                <div className='flex flex-col gap-3'>
                    <CompleteSentece state={ifData} selectedNodes={selectedNodes} setSelectedNodes={setSelectedNodes} componentData={ifData} dispatch={dispatch} />
                </div>
            </div>
        </>
    )
}
