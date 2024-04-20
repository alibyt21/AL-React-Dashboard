import { produce } from "immer";
import { check_if_nodes_can_be_merged, select_node_by_indexString } from "./AdvancedFilterHelper";
import { notify } from "src/services/Notification/Notification";

const reducer = produce((draft, action) => {
    let selected;
    switch (action.type) {
        case "CHANGEANDOR":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.operator = action.value;
            break;
        case "EDITRIGHT":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes[action.index].right = action.value;
            selected.nodes[action.index].sentence = selected.nodes[action.index].left + " " + selected.nodes[action.index].operator + " " + action.value;
            break;
        case "EDITOPERATOR":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes[action.index].operator = action.value;
            break;
        case "EDITLEFT":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes[action.index].left = action.value;
            selected.nodes[action.index].sentence = action.value + " " + selected.nodes[action.index].operator + " " + selected.nodes[action.index].right;
            break;
        case "ADDNEWROW":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes = [
                ...selected.nodes,
                {
                    NOT: false,
                    isEdit: true,
                    left: "name",
                    leftType: "",
                    operator: "==",
                    operatorValue: "",
                    order: "",
                    right: "",
                    rightType: "",
                    sentence: "",
                },
            ];
            break;
        case "DELETESENTENCE":
            selected = select_node_by_indexString(draft, action.indexString);
            let newNodes = [];
            selected.nodes.forEach((single, index) => {
                if (index != action.index) {
                    newNodes.push(single);
                }
            });
            selected.nodes = newNodes;
            break;
        case "EDITDONE":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes[action.index].isEdit = false;
            selected.nodes[action.index].sentence = selected.nodes[action.index].left + " " + selected.nodes[action.index].operator + " " + selected.nodes[action.index].right;
            break;
        case "EDITNODE":
            selected = select_node_by_indexString(draft, action.indexString);
            selected.nodes[action.index].isEdit = true;
            break;
        case "MAKENOT":
            action.selectedNodes.forEach(function (single) {
                let indexString = single.substring(0, single.indexOf("-"))
                let index = single.substring(single.indexOf("-") + 1)
                selected = select_node_by_indexString(draft, indexString);
                selected.nodes[index].NOT = !selected.nodes[index].NOT;
                selected.nodes[index].NOT
                    ?
                    selected.nodes[index].sentence = "! ( " + selected.nodes[index].left + " " + selected.nodes[index].operator + " " + selected.nodes[index].right + " )"
                    :
                    selected.nodes[index].sentence = selected.nodes[index].left + " " + selected.nodes[index].operator + " " + selected.nodes[index].right;
            })
            break;
        case "MAKEGROUP":
            if (!check_if_nodes_can_be_merged(action.selectedNodes)) {
                break;
            }
            let indexString = action.selectedNodes[0].substring(0, action.selectedNodes[0].indexOf("-"));
            if (indexString.length > 1) {
                notify("تنها یک لایه شرط قابل اعمال است", "error")
                break;
            }
            selected = select_node_by_indexString(draft, indexString);
            let savedNodes = [];
            let omitedNodes = [];
            let indexArray = [];
            action.selectedNodes.forEach(function (single) {
                let index = single.substring(single.indexOf("-") + 1)
                if (!indexArray.includes(index)) {
                    indexArray.push(parseInt(index));
                }
            })
            selected.nodes.forEach(function (single, index) {
                if (!indexArray.includes(index)) {
                    savedNodes.push(single);
                } else {
                    omitedNodes.push(single);
                }
            })
            selected.nodes = savedNodes;
            selected.childs.push({
                NOT: false,
                childs: [],
                nodes: omitedNodes,
                operator: action.operator,
                sentence: "",
                sequence: ""
            })
            action.setSelectedNodes([])
            break;
        case "ERASEDATA":
            draft.childs = [];
            draft.nodes = [];
            draft.NOT = false;
            draft.sentence = "";
            draft.operator = "AND";
            draft.sequence = "";
            break;
        case "CREATEGIST":
            let sentence = action.result.join(" ");
            draft.sentence = sentence;
            break;
        case "UPDATEDATA":
            draft.childs = action.data.childs;
            draft.nodes = action.data.nodes;
            draft.NOT = action.data.NOT;
            draft.sentence = action.data.sentence;
            draft.operator = action.data.operator;
            draft.sequence = action.data.sequence;
        default:
            break;
    }
});

export default reducer;