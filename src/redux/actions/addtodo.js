export let addtask = (task) => {
    return { type: "ADDTASK", payload: task }
}
export let deletetasktask = (task) => {
    return { type: "DELETETASK", payload: index }
}
export let updatetask = (index, data) => {
    console.log(index, data)
    return { type: "UPDATETASK", payload: { index, data } }
}