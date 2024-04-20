import { useEffect, useState } from 'react'

export default function GistSentence({ data, dispatch, isCompact = false }) {
    const [result, setResult] = useState([])
    let tempResult = [];
    const createSentence = (data) => {
        if (!data || Object.keys(data).length === 0) {
            return "";
        }
        // there isn't any child
        if (data.childs && data.childs.length) {
            // there is a number of childs
            if (data.NOT) {
                console.log("NOT");
                tempResult.push("!");
            }
            tempResult.push("(");
            if (data.nodes) {
                data.nodes.forEach(function (singleNode, index, array) {
                    tempResult.push(singleNode.sentence);
                    if (index !== array.length - 1) {
                        tempResult.push(data.operator);
                    }
                });
                tempResult.push(data.operator);
            }
            data.childs.forEach(function (singleChild, index, array) {
                createSentence(singleChild);
                if (index !== array.length - 1) {
                    tempResult.push(data.operator);
                }
            });
            tempResult.push(")");
        } else {
            if (data.NOT) {
                console.log("NOT");
                tempResult.push("!");
            }
            if (data.nodes && data.nodes.length >= 2) {
                tempResult.push("(");
            }
            data.nodes &&
                data.nodes.forEach(function (singleNode, index, array) {
                    tempResult.push(singleNode.sentence);
                    if (index !== array.length - 1) {
                        tempResult.push(data.operator);
                    }
                });
            if (data.nodes && data.nodes.length >= 2) {
                tempResult.push(")");
            }
        }
        setResult(tempResult);
        dispatch({
            type: "CREATEGIST",
            result
        })
    }
    useEffect(() => {
        createSentence(data);
    }, [data])

    return (
        <div className={`flex gap-2 items-center flex-wrap ${isCompact && "h-[38px] overflow-hidden"}`} style={{ direction: "ltr" }}>
            {result.map(function (single) {
                if (single.length > 3) {
                    return (<div className='border border-gray-200 border-solid p-2 px-3 rounded-xl'>{single}</div>)
                }
                return (<div>{single}</div>)
            })}
        </div>
    )
}
