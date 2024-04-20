export function select_node_by_indexString(data, index) {
    let selected = data;
    let indexArray = index.split("");
    indexArray.forEach((single, index) => {
        if (index == 0) {
            selected = selected;
        } else {
            selected = selected.childs[single]
        }
    });
    return selected;
}

export function check_if_nodes_can_be_merged (data) {
    let indexStringArray = [];
    data.forEach(function (single) {
        let indexString = single.substring(0, single.indexOf("-"));
        if (!indexStringArray.includes(indexString)) {
            indexStringArray.push(indexString);
        }
    })
    if (indexStringArray.length == 1 && data.length > 1) {
        return true;
    } else {
        return false;
    }
}